import { NavLink } from '@mantine/core';
import { IconHome2 } from "@tabler/icons";

export interface CircleItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

export default function CircleItem({ id, name, image, description }: any) {
  return (<NavLink
    key={id}
    label={name}
    icon={<IconHome2 size={16} stroke={1.5} />}
    description={description.slice(0, 25)}
  >
  </NavLink>);
}