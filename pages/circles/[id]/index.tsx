import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
  IconSpeakerphone,
  IconPencil,
  IconNotebook
} from "@tabler/icons";
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Badge,
  Box,
  NavLink,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Group,
  Container,
  Affix,
  Button,
  Grid
} from "@mantine/core";
import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { Types } from "../../../lib/types";
import { Mocking } from "../../../mock";
import CircleItem from "../../../components/circleitem";
import CircleMemberItem from "../../../components/circlememberitem";
import PromptInput from "../../../components/promptinput";
import RecentPrompt from "../../../components/recentprompt";

export async function getServerSideProps() {
  const data = Mocking.data
  return {
    props: {
      data: data,
      current: data.circles[0]
    }
  }
}

export default function Home({ data: { circles, posts, users, prompts, badges, comments }, current }: { data: any, current: Types.Circle }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [currentCircle, setCurrentCircle] = useState(current);
  
  const onAddPrompt = () => {
    
    Router.push(`${Router.route}/prompts`)
  }
  const onAddPost = () => {
    Router.push(`localhost:3000/circles/${current.id}/posts`)
  }

  return <>
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Box >
            <ScrollArea
              style={{ height: 800 }}
              type="never"
            >
              <Grid grow>
                <Grid.Col>
                {circles.map((circle: Types.Circle) => (
                <CircleItem
                  key={circle.id}
                  id={circle.id}
                  name={circle.name}
                  image={circle.bannerImage}
                  description={circle.description}
                  posts={posts}
                  onAddPost={onAddPost}
                  onAddPrompt={onAddPrompt}
                  selected={current.id === circle.id}
                />))}
                </Grid.Col>
              </Grid>
            </ScrollArea>

          <Box sx={{marginTop: '-1rem'}}>
      
              <Button sx={{width: '100%'}}> 
                Create Circle
                </Button>

                </Box>
          </Box>
            {/* <Affix position={{ bottom: 0}}>
            </Affix> */}
        </Navbar>
      }
      aside={
        < MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            {/* <Divider my="sm" /> */}
            <Text size={12} color="grey">
              Members
            </Text>
            <ScrollArea type="never">
              {users.map((user: Types.User) => (
                <CircleMemberItem
                  key={user.id}
                  username={user.username}
                  image={user.avatar}
                  email={user.email}
                />
              ))}
            </ScrollArea>
          </Aside>
        </MediaQuery >
      }
      footer={
        < Footer height={60} p="md" >
          <PromptInput />
        </Footer >
      }
      header={
        < Header height={70} p="md" >
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text><IconHome2 size={16} stroke={1.5} /> Writer's Circle</Text>
          </div>
        </Header >
      }
    >

      {/* 
      
        Main Area Goes Here 


      */}
      <Container size="xl" px="xl">
        <Group>
          <RecentPrompt
            prompt={prompts[0]}
            badges={badges}
            author={users[0]}
            comments={comments}
          />
          <RecentPrompt
            prompt={prompts[1]}
            badges={badges}
            author={users[1]}
            comments={comments}
          />
          <RecentPrompt
            prompt={prompts[2]}
            badges={badges}
            author={users[2]}
            comments={comments}
          />
          <RecentPrompt
            prompt={prompts[2]}
            badges={badges}
            author={users[2]}
            comments={comments}
          />
          <RecentPrompt
            prompt={prompts[2]}
            badges={badges}
            author={users[2]}
            comments={comments}
          />
          <RecentPrompt
            prompt={prompts[2]}
            badges={badges}
            author={users[2]}
            comments={comments}
          />

        </Group>
        {/* <Image
          src="/lofi_image.gif"
          layout="fill"
          objectFit="cover"
          style={{ opacity: 0.3 }}
        /> */}
      </Container>
    </AppShell >
  </>
}
