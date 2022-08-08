import { IconMessageCircle, IconPencil } from '@tabler/icons';
import { Avatar, Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, Accordion, Divider, ScrollArea, Grid, Container } from '@mantine/core';
import { Types } from '../lib/types';
// const useStyles = createStyles((theme) => ({
//   card: {
//     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
//   },

//   section: {
//     borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
//       }`,
//     paddingLeft: theme.spacing.md,
//     paddingRight: theme.spacing.md,
//     paddingBottom: theme.spacing.md,
//   },

//   like: {
//     color: theme.colors.red[6],
//   },

//   label: {
//     textTransform: 'uppercase',
//     fontSize: theme.fontSizes.xs,
//     fontWeight: 700,
//   },
// }));

export interface PromptProps {
  prompt: Types.Prompt;
  badges: Types.Badge[];
  author: Types.User
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
  },
  titleSubtext: {
    paddingLeft: 54,
    paddingTop: 25,
  },
  title: {
    paddingLeft: 54,
    paddingTop: -30,
  }
}));

export default function RecentPrompt({
  prompt,
  badges,
  author

}: PromptProps) {
  // const { classes, theme } = useStyles();
  // const {
  //   createdAt,
  //   title,
  //   image,
  //   text
  // } = prompt;
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src={author.avatar} alt={author.username} radius="xl" />
        <div>
          <Text size="sm">{author.username}</Text>
          <Text size="xs" color="dimmed">
            {new Date(prompt.createdAt).toLocaleTimeString()}
          </Text>
        </div>
      </Group>
      <Text className={classes.titleSubtext} color="dimmed" size="xs">Prompt Title</Text>
      <Text className={classes.title} size="md">{prompt.title}</Text>
      <Text className={classes.body} size="sm">
        {prompt.text}
      </Text>
      {/* <ActionIcon>do this</ActionIcon> */}
      <Group position='right'>
        <Group>
          <ActionIcon variant="outline" color="purple"><IconMessageCircle size={16} /></ActionIcon>
          <Text size="xs">3 comments</Text>
        </Group>
        <Group>
          <ActionIcon variant="outline" color="purple"><IconPencil size={16} /></ActionIcon>
          <Text size="xs">3 posts</Text>
        </Group>
      </Group>
    </div>
  );

  // return (
  //   <Card withBorder radius="md" p="md" className={classes.card}>
  //     <Card.Section>
  //       <Image src={image} alt={title} height={180} />
  //     </Card.Section>
  //     {/* {badges.map((badge) => (
  //       <Badge
  //         color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
  //         key={badge.id}
  //       // leftSection={badge.emoji}
  //       >
  //         {badge.text}
  //       </Badge>
  //     ))} */}
  //     <Card.Section className={classes.section} mt="md">
  //       <Group position="apart">
  //         <Text size="lg" weight={500}>
  //           {title}
  //         </Text>
  //         {/* <Badge size="sm">{country}</Badge> */}
  //       </Group>

  //       <PromptText
  //         expand={text.length > 250}
  //         text={text}
  //       />

  //     </Card.Section>

  //     <Group mt="xs">
  //       <Button radius="md" style={{ flex: 1 }}>
  //         Write
  //       </Button>
  //       <ActionIcon variant="default" radius="md" size={36}>
  //         <IconHeart size={18} className={classes.like} stroke={1.5} />
  //       </ActionIcon>
  //     </Group>
  //   </Card>
  // );
}