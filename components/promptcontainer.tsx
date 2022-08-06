import { Stack } from '@mantine/core';
import { Types } from '../lib/types'
import Prompt from './recentprompt';

export interface PromptContainerProps {
  prompts: {
    prompt: Types.Prompt,
    badges: Types.Badge[],
    author: {
      name: string,
      image: string
    }
  }[]
}

export default function PromptContainer({ prompts }: PromptContainerProps) {
  return (
    <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
      {prompts.map(prompt => (
        <Prompt {...prompt}></Prompt>
      ))}
    </Stack>
  );
}