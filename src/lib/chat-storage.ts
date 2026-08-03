import type { UIMessage } from "ai";

export type ChatThread = {
  id: string;
  title: string;
  updatedAt: number;
  messages: UIMessage[];
};

const KEY = "eco-insulate-chat-threads";

const isBrowser = () => typeof window !== "undefined";

export function newThreadId() {
  if (isBrowser() && "randomUUID" in crypto) return crypto.randomUUID();
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function loadThreads(): ChatThread[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return (parsed as ChatThread[])
      .filter((t) => t && typeof t.id === "string")
      .map((t) => ({
        id: t.id,
        title: typeof t.title === "string" ? t.title : "New chat",
        updatedAt: typeof t.updatedAt === "number" ? t.updatedAt : Date.now(),
        messages: Array.isArray(t.messages) ? t.messages : [],
      }))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  } catch {
    return [];
  }
}

export function saveThreads(threads: ChatThread[]) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(threads));
  } catch {
    /* storage full or unavailable */
  }
}

export function upsertThread(thread: ChatThread) {
  const threads = loadThreads();
  const next = [thread, ...threads.filter((t) => t.id !== thread.id)].sort(
    (a, b) => b.updatedAt - a.updatedAt,
  );
  saveThreads(next);
  return next;
}

export function deleteThread(id: string) {
  const next = loadThreads().filter((t) => t.id !== id);
  saveThreads(next);
  return next;
}

export function getThread(id: string) {
  return loadThreads().find((t) => t.id === id) ?? null;
}

export function titleFromMessages(messages: UIMessage[]) {
  const first = messages.find((m) => m.role === "user");
  if (!first) return "New chat";
  const text = first.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join(" ")
    .trim();
  if (!text) return "New chat";
  return text.length > 42 ? `${text.slice(0, 42)}…` : text;
}
