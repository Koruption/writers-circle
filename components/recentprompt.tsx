import { IconMessageCircle, IconPencil } from '@tabler/icons';
import { Avatar, Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, Accordion, Divider, ScrollArea, Grid, Container } from '@mantine/core';
import { Types } from '../lib/types';
import { useState } from 'react';
import CommentContainer from './commentcontainer';

export interface PromptProps {
  prompt: Types.Prompt;
  badges: Types.Badge[];
  author: Types.User,
  comments: Types.Comment[]
}

export function PromptText({ expand = false, text }: { expand: boolean, text: string }) {
  if (!expand) return (
    <Text>
      {text}
    </Text>
  )
  return (
    <Accordion
      chevronSize={0}
      disableChevronRotation={true}
      multiple={false}
    >
      <Accordion.Item value="customization">
        <Accordion.Control>
          <Text>
            {text.slice(0, 250)}
          </Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Text color="dimmed" size="xs">
            continued
          </Text>
          <Divider my="xs" labelPosition="center" />
          <Text size="sm" mt="xs">
            {text.slice(250)}
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>)
}

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    marginLeft: '-3.5rem'
  },
  titleSubtext: {
    paddingLeft: 54,
    paddingTop: 25,
    marginLeft: '-3.5rem'
  },
  title: {
    paddingLeft: 54,
    paddingTop: -30,
    marginLeft: '-3.5rem'
  },
  actions: {
    paddingTop: 25
  },
  promptImage: {
    marginTop: 25
  }
}));

export default function RecentPrompt({
  prompt,
  badges,
  author,
  comments
}: PromptProps) {
  const { classes } = useStyles();
  const [showComments, setShowComments] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const onToggleComments = () => {
    console.log('toggling comments: ', showComments)
    setShowComments(v => !v);
  }
  return (
    <Container style={{ width: '100%' }}>
      <Group>
        <Avatar src={author.avatar} alt={author.username} radius="xl" />
        <div>
          <Text size="sm">{author.username}</Text>
          <Text size="xs" color="dimmed">
            {new Date(prompt.createdAt).toLocaleTimeString()}
          </Text>
        </div>
      </Group>
      <Image
        className={classes.promptImage}
        src={prompt.image}
        width={'100%'}
        height={'35rem'}
        radius={2}
      />
      <Text className={classes.titleSubtext} color="dimmed" size="xs">Prompt Title</Text>
      <Text className={classes.title} size="xl">{prompt.title}</Text>
      <Text className={classes.body} size="sm">
        {prompt.text}
      </Text>
      <Group className={classes.actions}  position='right'>
        <Group>
          <ActionIcon
            variant="outline"
            color="purple"
            onClick={onToggleComments}
          >
            <IconMessageCircle size={16} />
          </ActionIcon>
          <Text size="xs">3 comments</Text>
        </Group>
        <Group>
          <ActionIcon
            variant="outline"
            color="purple"
          >
            <IconPencil size={16} />
          </ActionIcon>
          <Text size="xs">3 posts</Text>
        </Group>
        <CommentContainer
          show={showComments}
          comments={comments}
        />
      </Group>
    </Container>
  );
}