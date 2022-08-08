import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

export interface CircleMemberItemProps {
    image: string;
    username: string;
    email: string
}
const useStyles = createStyles((theme) => ({
    user: {
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
    },
}));

export default function CircleMemberItem({ image, username, email }: CircleMemberItemProps) {
    const { classes } = useStyles();

    return (
        <UnstyledButton className={classes.user}>
            <Group>
                <Avatar src={image} radius="xl" />

                <div style={{ flex: 1 }}>
                    <Text size="sm" weight={500}>
                        {username}
                    </Text>
                    <Text color="dimmed" size="xs">
                        {email.slice(0, 22).concat('...')}
                    </Text>
                </div>

            </Group>
        </UnstyledButton>
    );
}