import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { HardHat } from "lucide-react";
import { titleFromMessages, upsertThread } from "@/lib/chat-storage";

const SUGGESTIONS = [
  "What insulation suits a 1930s solid-wall semi?",
  "How long does external wall rendering take?",
  "Will insulation help with condensation and damp?",
  "Do you cover Birmingham and the West Midlands?",
];

export function ChatWindow({
  threadId,
  initialMessages,
  onThreadsChange,
}: {
  threadId: string;
  initialMessages: UIMessage[];
  onThreadsChange?: () => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { messages, sendMessage, status } = useChat({
    id: threadId,
    messages: initialMessages,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (error) => {
      toast.error(error.message || "The assistant could not reply. Please try again.");
    },
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    textareaRef.current?.focus();
  }, [threadId]);

  useEffect(() => {
    if (!isBusy) textareaRef.current?.focus();
  }, [isBusy]);

  useEffect(() => {
    if (messages.length === 0) return;
    upsertThread({
      id: threadId,
      title: titleFromMessages(messages),
      updatedAt: Date.now(),
      messages,
    });
    onThreadsChange?.();
  }, [messages, threadId, onThreadsChange]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || isBusy) return;
    void sendMessage({ text: value });
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Conversation className="min-h-0 flex-1">
        <ConversationContent className="mx-auto w-full max-w-3xl gap-6">
          {messages.length === 0 ? (
            <ConversationEmptyState
              icon={<HardHat className="size-8 text-primary" />}
              title="Ask our insulation assistant"
              description="Questions about insulation, render, plaster or your project? Ask away."
            >
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </ConversationEmptyState>
          ) : (
            messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, index) =>
                    part.type === "text" ? (
                      <MessageResponse key={index}>{part.text}</MessageResponse>
                    ) : null,
                  )}
                </MessageContent>
              </Message>
            ))
          )}
          {status === "submitted" && (
            <Shimmer className="text-sm">Thinking…</Shimmer>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="mx-auto w-full max-w-3xl shrink-0 p-4">
        <PromptInput
          onSubmit={(message) => {
            send(message.text ?? "");
          }}
        >
          <PromptInputTextarea
            ref={textareaRef}
            autoFocus
            placeholder="Ask about insulation, render, timescales…"
          />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit status={status} disabled={isBusy} />
          </PromptInputFooter>
        </PromptInput>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          AI answers are guidance only — book a free survey for exact advice.
        </p>
      </div>
    </div>
  );
}
