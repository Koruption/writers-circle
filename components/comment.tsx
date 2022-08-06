import { createStyles, Text, Avatar, Group } from '@mantine/core';
import { Types } from './../types/types';


const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

interface CommentProps {
  postedAt: string;
  text: string;
  author: {
    name: string;
    image: string;
  };
}

export default function Comment({ text, author, postedAt }: CommentProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {text}
      </Text>
    </div>
  );
}