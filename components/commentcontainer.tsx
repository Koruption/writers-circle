import { Types } from "../lib/types";
import { IconPencil, IconSend } from "@tabler/icons";
import {
  Text,
  Accordion,
  Divider,
  Container,
  Group,
  Stack,
  Input,
  ActionIcon,
  ScrollArea,
  Textarea,
  Button,
} from "@mantine/core";
import Comment from "./comment";
import { useState } from "react";

export interface CommentContainerProps {
  show?: boolean;
  comments: Types.Comment[];
}

export default function CommentContainer({
  show,
  comments,
}: CommentContainerProps) {
  if (!show) return null;
  return (
    <Group position="left">
      <Textarea
        placeholder="Your comment"
        label="Your comment"

        sx={{ width: "100%" }}
      />
      <Button
        leftIcon=<IconSend size={16} />
      > Post </Button>
     
      <ScrollArea type="always" scrollbarSize={18}>
        <Divider my="xs" label="comments" labelPosition="center" />
        {[...comments, ...comments, ...comments, ...comments].map(
          (comment, index) => (
            <Comment
              key={index}
              author={{
                name: comment.authorId,
                image:
                  "https://images.unsplash.com/photo-1659605199215-83f8b3a8b5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
              }}
              postedAt={comment.createdAt}
              text={comment.text}
            />
          )
        )}
      </ScrollArea>
    </Group>
  );
}
