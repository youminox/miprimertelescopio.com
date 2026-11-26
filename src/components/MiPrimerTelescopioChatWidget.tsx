"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type FormEvent,
} from "react";
import {
  CHAT_ENDPOINT_PUBLIC,
  OPEN_CHAT_EVENT,
  getVisitor,
  trackClick,
} from "@/lib/client-constants";
import {
  detectUserAmazonRegion,
  type AmazonStoreRegion,
} from "@/lib/amazon";

const STORAGE_SESSION_KEY = "mpt_chat_session";
const STORAGE_MESSAGES_KEY = "mpt_chat_messages";
const STORAGE_TEASER_KEY = "mpt_chat_teaser";

export interface ChatArticleCard {
  slug: string;
  title: string;
  category: string;
  categoryName: string;
  url: string;
  image: string;
  readTime: string;
  excerpt: string;
}

export interface ChatAmazonProductCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  urlUS: string;
  urlES: string;
}

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  recommendedArticles?: ChatArticleCard[];
  recommendedProducts?: ChatAmazonProductCard[];
  suggestedOptions?: string[];
  createdAt: string;
}

const INITIAL_QUICK_OPTIONS = [
  "🔭 Quiero mi primer telescopio (< $200) fácil de armar y que quepa en casa",
  "🎁 Busco telescopio para regalar a un aficionado o niño en Amazon EE. UU.",
  "🪐 ¿Qué telescopio necesito para ver cráteres de la Luna y anillos de Saturno?",
  "⚖️ Celestron StarSense vs Sky-Watcher Heritage vs Gskyer vs Orion",
  "🔍 ¿Qué oculares, Barlow 2x y adaptador de celular son compatibles?",
  "🏠 Telescopio compacto para observar desde balcón de departamento",
];

const DEFAULT_WELCOME =
  "¡Hola! 🔭✨ Soy tu Asesor de Telescopios IA de MiPrimerTelescopio.com (modelo mini rápido). Cuéntame tu presupuesto, si es para ti o para regalo, cuánto espacio tienes en casa y qué te gustaría ver (Luna, Saturno, Júpiter o nebulosas): te recomendaré el telescopio Celestron, Sky-Watcher, Gskyer u Orion ideal y sus accesorios compatibles en Amazon EE. UU.";

export default function MiPrimerTelescopioChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [showTeaser, setShowTeaser] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState(DEFAULT_WELCOME);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState<AmazonStoreRegion>("US");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pendingPromptRef = useRef<string | null>(null);

  useEffect(() => {
    setRegion(detectUserAmazonRegion());
    try {
      const savedSession = localStorage.getItem(STORAGE_SESSION_KEY);
      if (savedSession) setSessionId(savedSession);

      const savedMessages = localStorage.getItem(STORAGE_MESSAGES_KEY);
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // ignore
    }

    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    try {
      if (!sessionStorage.getItem(STORAGE_TEASER_KEY)) {
        t1 = setTimeout(() => {
          setShowTeaser(true);
          sessionStorage.setItem(STORAGE_TEASER_KEY, "1");
          t2 = setTimeout(() => setShowTeaser(false), 9000);
        }, 10000);
      }
    } catch {
      // ignore
    }

    fetch(CHAT_ENDPOINT_PUBLIC, { method: "GET" })
      .then((r) => r.json())
      .then((data) => {
        if (typeof data?.is_enabled === "boolean") {
          setIsEnabled(data.is_enabled);
        }
        if (data?.welcome_message) {
          setWelcomeMessage(data.welcome_message);
        }
      })
      .catch(() => {});

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [messages, isOpen, isLoading]);

  const persistMessages = useCallback(
    (nextMessages: ChatMessage[], nextSessionId?: string | null) => {
      setMessages(nextMessages);
      try {
        localStorage.setItem(
          STORAGE_MESSAGES_KEY,
          JSON.stringify(nextMessages.slice(-24))
        );
        if (nextSessionId) {
          localStorage.setItem(STORAGE_SESSION_KEY, nextSessionId);
        }
      } catch {
        // ignore
      }
    },
    []
  );

  const sendMessage = useCallback(
    async (textToSend: string) => {
      const trimmed = textToSend.trim();
      if (!trimmed || isLoading) return;

      const userMsg: ChatMessage = {
        id: "u-" + Date.now(),
        role: "user",
        content: trimmed,
        createdAt: new Date().toISOString(),
      };

      const updatedWithUser = [...messages, userMsg];
      persistMessages(updatedWithUser, sessionId);
      setInput("");
      setIsLoading(true);

      try {
        const historyPayload = updatedWithUser.slice(-8).map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const res = await fetch(CHAT_ENDPOINT_PUBLIC, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "chat",
            session_id: sessionId,
            visitor_id: getVisitor(),
            region,
            message: trimmed,
            history: historyPayload.slice(0, -1),
            page_url:
              typeof window !== "undefined"
                ? window.location.href
                : "https://miprimertelescopio.com/",
            user_agent:
              typeof navigator !== "undefined" ? navigator.userAgent : "",
          }),
        });

        const data = await res.json();
        const newSessId = data.session_id || sessionId;
        if (newSessId && newSessId !== sessionId) {
          setSessionId(newSessId);
        }

        const assistantMsg: ChatMessage = {
          id: "a-" + Date.now(),
          role: "assistant",
          content:
            data.reply ||
            "Te recomiendo explorar nuestra selección de [Mejores Telescopios para Principiantes y Regalar en Amazon](https://miprimertelescopio.com/telescopios-por-presupuesto-espacio-y-regalo/mejores-telescopios-para-principiantes-y-regalar-en-amazon/).",
          recommendedArticles: Array.isArray(data.recommended_articles)
            ? data.recommended_articles
            : [],
          recommendedProducts: Array.isArray(data.recommended_products)
            ? data.recommended_products
            : [],
          suggestedOptions: Array.isArray(data.suggested_options)
            ? data.suggested_options
            : [],
          createdAt: new Date().toISOString(),
        };

        persistMessages([...updatedWithUser, assistantMsg], newSessId);
      } catch {
        const fallbackMsg: ChatMessage = {
          id: "a-err-" + Date.now(),
          role: "assistant",
          content:
            "Hubo una breve demora en la conexión. Puedes revisar nuestra guía principal en [Mejores Telescopios para Principiantes y Regalar en Amazon](https://miprimertelescopio.com/telescopios-por-presupuesto-espacio-y-regalo/mejores-telescopios-para-principiantes-y-regalar-en-amazon/).",
          suggestedOptions: ["Intentar de nuevo"],
          createdAt: new Date().toISOString(),
        };
        persistMessages([...updatedWithUser, fallbackMsg], sessionId);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages, persistMessages, region, sessionId]
  );

  useEffect(() => {
    const handleOpenEvent = (ev: Event) => {
      const customEv = ev as CustomEvent<{ prompt?: string }>;
      setIsOpen(true);
      setShowTeaser(false);
      if (customEv.detail?.prompt) {
        pendingPromptRef.current = customEv.detail.prompt;
      }
    };
    window.addEventListener(OPEN_CHAT_EVENT, handleOpenEvent);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, handleOpenEvent);
  }, []);

  useEffect(() => {
    if (isOpen && pendingPromptRef.current && !isLoading) {
      const p = pendingPromptRef.current;
      pendingPromptRef.current = null;
      sendMessage(p);
    }
  }, [isOpen, isLoading, sendMessage]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleResetChat = () => {
    setMessages([]);
    setSessionId(null);
    try {
      localStorage.removeItem(STORAGE_MESSAGES_KEY);
      localStorage.removeItem(STORAGE_SESSION_KEY);
    } catch {
      // ignore
    }
  };

  const toLocalOrFullHref = (url: string) => {
    if (url.startsWith("https://miprimertelescopio.com")) {
      return url.replace("https://miprimertelescopio.com", "") || "/";
    }
    return url;
  };

  const renderFormattedContent = (text: string) => {
    return text.split("\n").map((line, li) => {
      if (!line.trim()) return <div key={li} className="h-2" />;
      const parts = line.split(
        /(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\*\*[^*]+\*\*)/g
      );
      const bullet = /^\s*[-•]\s+/.test(line);
      return (
        <p
          key={li}
          className={`mb-1.5 leading-relaxed last:mb-0 ${bullet ? "pl-3" : ""}`}
        >
          {parts.map((part, i) => {
            const linkMatch = part.match(
              /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/
            );
            if (linkMatch) {
              const label = linkMatch[1];
              const rawUrl = linkMatch[2];
              const isAmazon = /amazon\.(es|com)/i.test(rawUrl);
              const href = isAmazon ? rawUrl : toLocalOrFullHref(rawUrl);
              return (
                <a
                  key={i}
                  href={href}
                  target={isAmazon ? "_blank" : undefined}
                  rel={
                    isAmazon
                      ? "nofollow sponsored noopener noreferrer"
                      : undefined
                  }
                  onClick={() =>
                    trackClick(
                      isAmazon ? "chat-amazon-link" : "chat-guide-link",
                      {
                        session_id: sessionId,
                        article_title: label,
                        category: isAmazon ? "amazon" : "guide",
                        target_url: rawUrl,
                      }
                    )
                  }
                  className={
                    isAmazon
                      ? "inline-flex items-center gap-1 rounded-md bg-amber-400/30 px-1.5 py-0.5 font-extrabold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-2 hover:bg-amber-400/50"
                      : "font-bold text-[#3730A3] underline decoration-[#38BDF8] decoration-2 underline-offset-2"
                  }
                >
                  {isAmazon ? `🔭 ${label} ↗` : label}
                </a>
              );
            }
            const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
            if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>;
            return (
              <span key={i}>
                {bullet && i === 0 ? part.replace(/^\s*[-•]\s+/, "• ") : part}
              </span>
            );
          })}
        </p>
      );
    });
  };

  if (!isEnabled) return null;
  const lastMsg = messages[messages.length - 1];
  const storeName = region === "US" ? "Amazon.com" : "Amazon.es";

  return (
    <div className="fixed bottom-[88px] right-4 z-50 flex flex-col items-end md:bottom-6 md:right-6">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Asesor Astronómico IA MiPrimerTelescopio.com"
          className="mb-3 flex h-[600px] max-h-[80vh] w-[calc(100vw-1.75rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:w-[420px]"
        >
          <div
            className="flex shrink-0 items-center justify-between gap-2 px-4 py-3.5 text-white"
            style={{
              background:
                "linear-gradient(135deg, #030712 0%, #1e1b4b 55%, #0284c7 100%)",
            }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sky-400/40 bg-sky-400/15 text-xl"
                aria-hidden
              >
                🔭
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#030712] bg-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate font-display text-[15px] font-extrabold leading-tight">
                    Asesor IA · MiPrimerTelescopio
                  </p>
                  <span className="inline-flex items-center whitespace-nowrap shrink-0 leading-none text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FEF08A] text-slate-950">
                    Mini IA
                  </span>
                </div>
                <p className="text-[11px] text-white/80 truncate mt-0.5">
                  1,534 Guías + Telescopios y Compatibles {storeName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="hidden sm:flex items-center rounded-full bg-white/10 p-0.5 text-[10px] font-bold mr-1">
                <button
                  type="button"
                  onClick={() => setRegion("US")}
                  className={`px-1.5 py-0.5 rounded-full cursor-pointer ${
                    region === "US"
                      ? "bg-amber-400 text-slate-950"
                      : "text-white/80"
                  }`}
                >
                  🇺🇸 US
                </button>
                <button
                  type="button"
                  onClick={() => setRegion("ES")}
                  className={`px-1.5 py-0.5 rounded-full cursor-pointer ${
                    region === "ES"
                      ? "bg-amber-400 text-slate-950"
                      : "text-white/80"
                  }`}
                >
                  🇪🇸 ES
                </button>
              </div>
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="rounded-full px-2 py-1 text-xs text-white/85 hover:bg-white/15 cursor-pointer"
                >
                  Reiniciar
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/15 cursor-pointer"
                aria-label="Cerrar chat"
              >
                ✕
              </button>
            </div>
          </div>

          <div
            className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-slate-50 p-4 text-[13.5px] text-slate-900"
            data-lenis-prevent
          >
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm">
              {renderFormattedContent(welcomeMessage)}
            </div>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {INITIAL_QUICK_OPTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="rounded-2xl border border-indigo-500/30 bg-white px-3 py-1.5 text-left text-xs font-semibold text-slate-800 hover:bg-indigo-50 transition cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className="space-y-2">
                <div
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                      m.role === "user"
                        ? "rounded-tr-sm bg-[#070D1F] text-white"
                        : "rounded-tl-sm border border-slate-200 bg-white"
                    }`}
                  >
                    {m.role === "user"
                      ? m.content
                      : renderFormattedContent(m.content)}
                  </div>
                </div>

                {m.role === "assistant" &&
                  m.recommendedProducts &&
                  m.recommendedProducts.length > 0 && (
                            <p className="mt-1 font-display text-xs font-extrabold text-slate-900 leading-snug">
                              {prod.title}
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-600 line-clamp-2">
                              {prod.subtitle}
                            </p>
                            <a
                              href={prodUrl}
                              target="_blank"
                              rel="nofollow sponsored noopener noreferrer"
                              onClick={() =>
                                trackClick("chat-product-card", {
                                  session_id: sessionId,
                                  article_slug: prod.id,
                                  article_title: prod.title,
                                  category: "amazon",
                                  target_url: prodUrl,
                                })
                              }
                              className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#4F46E5] px-3 py-2 text-xs font-extrabold text-white hover:bg-[#3730A3] transition"
                            >
                              <span>🔭 Ver precio hoy en {storeName}</span>
                              <span>↗</span>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  )}

                {m.role === "assistant" &&
                  m.recommendedArticles &&
                  m.recommendedArticles.length > 0 && (
                    <div className="space-y-1.5 pl-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        🌌 Guías en MiPrimerTelescopio.com:
                      </p>
                      {m.recommendedArticles.map((art) => (
                        <a
                          key={art.slug}
                          href={toLocalOrFullHref(art.url)}
                          onClick={() =>
                            trackClick("chat-article-card", {
                              session_id: sessionId,
                              article_slug: art.slug,
                              article_title: art.title,
                              category: art.category,
                              target_url: art.url,
                            })
                          }
                          className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs hover:border-[#4F46E5] hover:bg-indigo-50/50 transition"
                        >
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-[#0284C7]">
                              {art.categoryName}
                            </span>
                            <p className="font-bold text-slate-900 truncate">
                              {art.title}
                            </p>
                          </div>
                          <span className="shrink-0 font-bold text-[#3730A3]">
                            Leer →
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-1.5 px-2 py-1" aria-label="Escribiendo">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 animate-bounce rounded-full bg-[#4F46E5]"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}

            {!isLoading &&
              lastMsg?.role === "assistant" &&
              lastMsg.suggestedOptions &&
              lastMsg.suggestedOptions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {lastMsg.suggestedOptions.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => sendMessage(o)}
                      className="rounded-full border border-indigo-500/35 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-indigo-50 cursor-pointer"
                    >
                      {o}
                    </button>
                  ))}
                </div>
              )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex shrink-0 gap-2 border-t border-slate-200 bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ej: ¿Celestron 80AZ o Heritage 130P para balcón?…"
              maxLength={500}
              className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5]"
              aria-label="Tu consulta sobre telescopios o accesorios compatibles"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#070D1F] text-sky-300 disabled:opacity-40 cursor-pointer"
              aria-label="Enviar"
            >
              ➤
            </button>
          </form>
          <p className="shrink-0 bg-white px-4 pb-2 text-center text-[10px] text-slate-500">
            Asesor IA experto en Celestron, Sky-Watcher, Gskyer, Orion y
            compatibilidad en Amazon.
          </p>
        </div>
      )}

      {!isOpen && showTeaser && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setShowTeaser(false);
          }}
          className="mb-3 max-w-[280px] rounded-2xl rounded-br-sm border border-slate-200 bg-white px-4 py-3 text-left text-xs shadow-xl cursor-pointer"
        >
          <span className="font-bold text-slate-900 block">
            🔭 ¿Buscas tu primer telescopio o regalo?
          </span>
          <span className="mt-0.5 block text-slate-600">
            Dime tu presupuesto y espacio en casa: te recomiendo modelo y
            oculares compatibles en Amazon.
          </span>
        </button>
      )}

      <button
        type="button"
        onClick={() => {
          setIsOpen((o) => !o);
          setShowTeaser(false);
        }}
        aria-label={
          isOpen
            ? "Cerrar asesor astronómico"
            : "Abrir asesor astronómico"
        }
        className="group relative flex h-14 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#030712] via-[#1e1b4b] to-[#0284c7] px-5 text-white shadow-[0_18px_40px_-12px_rgba(7,13,31,0.85)] transition hover:scale-105 cursor-pointer"
      >
        <span className="text-xl" aria-hidden>
          🔭
        </span>
        <span className="font-display text-sm font-extrabold">
          {isOpen ? "Cerrar" : "Asesor Telescopios IA"}
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300 animate-pulse" />
      </button>
    </div>
  );
}
