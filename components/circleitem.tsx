export interface CircleItemProps {
  name: string;
  image: string;
}

export default function CircleItem({ name, image }: CircleItemProps) {
  console.log(name)
  console.log(image)
  return <>Nav Item</>
}