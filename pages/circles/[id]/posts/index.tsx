import { useState } from 'react';
// import { RichTextEditor } from '@mantine/rte';
import dynamic from 'next/dynamic';
const RichTextEditor = dynamic(import('@mantine/rte'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

const initialValue =
  '<h1>Your Title Goes Here</h1> <b></b> Write something great...';

export default function PostHome() {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor sx={{height: '0.5rem'}} value={value} onChange={onChange} />;
}