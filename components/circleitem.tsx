import { NavLink, Avatar, Navbar, ScrollArea, Divider, Text } from '@mantine/core';
import { IconLayoutList, IconNotebook, IconSpeakerphone, IconPencil } from "@tabler/icons";
import { Types } from '../lib/types';

export interface CircleItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  posts: Types.Post[],
  selected?: boolean;
  onAddPrompt: () => void;
  onAddPost: () => void;
}

export default function CircleItem({ id, name, image, description, posts, onAddPrompt, onAddPost, selected = false }: CircleItemProps) {
  return (<NavLink
    label={name}
    icon={<Avatar src={image} radius='xl' />}
    description={description.slice(0, 25)}
    defaultOpened={selected}
  >
    <Divider my="sm" />
    <Text size={12} color="grey">
      Actions
    </Text>
    <NavLink
      key="nci0"
      label="View Prompts"
      icon={<IconLayoutList size={16} stroke={1.5} />}
    />
    <NavLink
      key="nci1"
      label="Add Prompt"
      onClick={onAddPrompt}
      icon={<IconSpeakerphone size={16} stroke={1.5} />}
    />
    <NavLink
      key="nci2"
      label="Add Post"
      onClick={onAddPost}
      icon={<IconPencil size={16} stroke={1.5} />}
    />
    <Navbar.Section mt="xs" grow px="xs">
      <Text size={12} color="grey">
        Pages
      </Text>
      <Divider my="sm" />
      {posts.map((post: Types.Post) => (
        <NavLink
          key={post.id}
          label={post.title}
          icon={<IconNotebook size={16} stroke={1.5} />}
        />
      ))}
    </Navbar.Section>
  </NavLink>);
}