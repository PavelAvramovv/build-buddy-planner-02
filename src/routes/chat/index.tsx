import { createFileRoute, redirect } from "@tanstack/react-router";

import { loadThreads, newThreadId } from "@/lib/chat-storage";

export const Route = createFileRoute("/chat/")({
  ssr: false,
  beforeLoad: () => {
    const existing = loadThreads();
    const id = existing[0]?.id ?? newThreadId();
    throw redirect({ to: "/chat/$threadId", params: { threadId: id } });
  },
  component: () => null,
});
