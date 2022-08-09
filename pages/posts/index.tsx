import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  IconTrash,
  IconCloud
} from "@tabler/icons";
import {
  Paper,
  Text,
  createStyles,
  Grid,
  Button,
  Group,
  Stack,
  Container,
  Transition,
} from "@mantine/core";
import { Mocking } from "../../mock";
import { Types } from "../../lib/types";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    marginLeft: "-3.5rem",
  },
  titleSubtext: {
    zIndex: 2,
    paddingLeft: 54,
    paddingTop: 25,
    marginLeft: "-3.5rem",
  },
  title: {
    zIndex: 2,
    paddingLeft: 54,
    paddingTop: -30,
    marginLeft: "-3.5rem",
  },
  button: {
    zIndex: 2,
  },
  grid: {
    zIndex: 2,
  },
}));

const PromptSection = ({
  prompt=null!,
  classes,
}: {
  prompt: Types.Prompt;
  classes: any;
}) => {
  if (prompt)
    return (
      <>
        <Text className={classes.titleSubtext} color="dimmed" size="xs">
          Prompt Title
        </Text>
        <Text className={classes.title} size="xl">
          {prompt.title}
        </Text>
        <Text className={classes.body} size="sm">
          {prompt.text}
        </Text>
      </>
    );
  return (
    <>
      <Grid className={classes.grid}>
        <Grid.Col>
          <Text>No prompt to see here. Write what you feel...</Text>
          <Button
            className={classes.button}
            variant="light"
            onClick={() => {
              console.log("Adding Prompt");
            }}
            sx={{ marginTop: "1rem" }}
          >
            Add Prompt
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
};

// Need this to get quill working b/c next ssr breaks it
// see here: https://mantine.dev/others/rte/#usage-with-nextjs
const RichTextEditor = dynamic(import("@mantine/rte"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const initialValue =
  "<h1>Your Title Goes Here</h1> <b></b> Write something great...";

export function getServerSideProps(context: any) {
  console.log(context.query)
  return {
    props: {
      prompt: Mocking._prompts[0]
    }
  }
}

export default function PostHome({ prompt = null! }: { prompt: Types.Prompt }) {
  console.log('props', prompt)
  const { classes } = useStyles();
  const [fade, toggleFade] = useState(false)
  const [value, onChange] = useState(initialValue);
  
  useEffect(() => {
    setTimeout(() => {
      toggleFade(true)
      console.log('fade', fade)
    }, 500)
    return function cleanup() {
      toggleFade(false)
    }
  }, [])

  return (
    <>
      <Transition mounted={ fade } transition="fade" duration={4000} timingFunction="ease">
        {(styles) => <div style={styles}>
        <Container>
        <Grid sx={{ marginTop: "5rem" }}>
          <Grid.Col>
            <Group>
              <Button
                className={classes.button}
                variant="outline"
                onClick={() => {
                  console.log("Adding Prompt");
                }}
                leftIcon={<IconCloud size={16} stroke={1.5} />}
                sx={{ marginBottom: "1rem" }}
              >
                Save
              </Button>
              <Button
                className={classes.button}
                variant="light"
                color="red"
                onClick={() => {
                  console.log("Adding Prompt");
                }}
                leftIcon={<IconTrash size={16} stroke={1.5} />}
                sx={{ marginBottom: "1rem" }}
              >
                Delete
              </Button>
            </Group>
            <Paper p="xl" withBorder sx={{ marginBottom: "1rem" }}>
              <PromptSection prompt={prompt} classes={classes} />
            </Paper>
            <RichTextEditor
              sx={{ height: "0.5rem", zIndex: 2 }}
              value={value}
              onChange={onChange}
            />
          </Grid.Col>
        </Grid>
        <Image
          src="/lofi_image.gif"
          layout="fill"
          objectFit="cover"
          style={{ opacity: "0.3" }}
        />
      </Container>
        </div>}
      </Transition>
    </>
  );
}


/**
 *       <Container>
        <Grid sx={{ marginTop: "5rem" }}>
          <Grid.Col>
            <Group>
              <Button
                className={classes.button}
                variant="outline"
                onClick={() => {
                  console.log("Adding Prompt");
                }}
                leftIcon={<IconCloud size={16} stroke={1.5} />}
                sx={{ marginBottom: "1rem" }}
              >
                Save
              </Button>
              <Button
                className={classes.button}
                variant="light"
                color="red"
                onClick={() => {
                  console.log("Adding Prompt");
                }}
                leftIcon={<IconTrash size={16} stroke={1.5} />}
                sx={{ marginBottom: "1rem" }}
              >
                Delete
              </Button>
            </Group>
            <Paper p="xl" withBorder sx={{ marginBottom: "1rem" }}>
              <PromptSection prompt={prompt} classes={classes} />
            </Paper>
            <RichTextEditor
              sx={{ height: "0.5rem", zIndex: 2 }}
              value={value}
              onChange={onChange}
            />
          </Grid.Col>
        </Grid>
        <Image
          src="/lofi_image.gif"
          layout="fill"
          objectFit="cover"
          style={{ opacity: "0.3" }}
        />
      </Container>
 */