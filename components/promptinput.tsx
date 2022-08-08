import { Input, Tooltip } from '@mantine/core';
import { IconBrandTwitter, IconAlertCircle, IconSettings, IconPhoto, IconPencil } from '@tabler/icons';
import { ActionIcon, Group, Grid } from '@mantine/core';

export default function PromptInput() {
    return <Input
        icon={<IconPencil size={16} />}
        placeholder="Enter an inspiring prompt"
        rightSection={
            <ActionIcon variant="filled" color="purple"><IconPhoto size={16} /></ActionIcon>
        }
    />
}