import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { MessageSquarePlus, Trash2, ArrowLeft } from "lucide-react";
import { useCallback, useState } from "react";

import { ChatWindow } from "@/components/ChatWindow";
import {
  deleteThread,
  getThread,
  loadThreads,
  newThreadId,
  type ChatThread,
} from "@/lib/chat-storage";
import { company } from "@/lib/site-content";

export const Route = createFileRoute("/chat/$threadId")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "AI Insulation Assistant | Eco Insulate Limited" },
      {
        name: "description",
        content:
          "Chat with the Eco Insulate Limited AI assistant about insulation, rendering, plastering and your UK property project.",
      },
      { property: "og:title", content: "AI Insulation Assistant | Eco Insulate Limited" },
      {
        property: "og:description",
        content:
          "Ask our AI assistant about insulation, render finishes, timescales and UK Building Regulations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const { threadId } = Route.useParams();
  const navigate = useNavigate();
  const [threads, setThreads] = useState<ChatThread[]>(() => loadThreads());

  const refresh = useCallback(() => setThreads(loadThreads()), []);

  const thread = getThread(threadId);

  const startNew = () => {
    const id = newThreadId();
    void navigate({ to: "/chat/$threadId", params: { threadId: id } });
  };

  const remove = (id: string) => {
    const next = deleteThread(id);
    setThreads(next);
    if (id === threadId) {
      const target = next[0]?.id ?? newThreadId();
      void navigate({ to: "/chat/$threadId", params: { threadId: target } });
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border bg-ink px-5 py-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-foreground/80 transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </Link>
        <div className="text-center">
          <p className="font-heading text-base font-bold uppercase tracking-wide text-ink-foreground">
            AI Insulation Assistant
          </p>
          <p className="text-[11px] text-ink-foreground/60">{company.name}</p>
        </div>
        <a
          href={company.phoneHref}
          className="hidden text-sm font-semibold text-primary sm:block"
        >
          {company.phone}
        </a>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-muted/30 md:flex">
          <div className="p-3">
            <button
              type="button"
              onClick={startNew}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageSquarePlus className="size-4" />
              New chat
            </button>
          </div>
          <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-2 pb-4">
            {threads.length === 0 && (
              <p className="px-2 py-4 text-xs text-muted-foreground">
                Your conversations will appear here.
              </p>
            )}
            {threads.map((t) => (
              <div
                key={t.id}
                className={`group flex items-center gap-1 rounded-md px-1 ${
                  t.id === threadId ? "bg-primary/15" : "hover:bg-muted"
                }`}
              >
                <Link
                  to="/chat/$threadId"
                  params={{ threadId: t.id }}
                  className="min-w-0 flex-1 truncate px-2 py-2 text-left text-sm text-foreground"
                >
                  {t.title}
                </Link>
                <button
                  type="button"
                  aria-label="Delete conversation"
                  onClick={() => remove(t.id)}
                  className="rounded p-1.5 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            ))}
          </nav>
        </aside>

        <main className="min-h-0 flex-1">
          <ChatWindow
            key={threadId}
            threadId={threadId}
            initialMessages={thread?.messages ?? []}
            onThreadsChange={refresh}
          />
        </main>
      </div>
    </div>
  );
}
