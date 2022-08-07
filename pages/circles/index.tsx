import { Mocking } from './../../mock'
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
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
  Avatar,
  Button,
} from "@mantine/core";
import { Types } from '../../lib/types';

export async function getServerSideProps() {
  return {
    props: Mocking.data
    
  }
}

export default function Home({ circles }: { circles: Types.Circle[]}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return     <>
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
        <Box sx={{ width: 240 }}>
          {circles.map(circle => (
            <NavLink
              key={circle.id}
              label={circle.name}
              icon={<IconHome2 size={16} stroke={1.5} />}
              description={circle.description.slice(0,25)}
            >
              <NavLink label="Add Prompt"></NavLink>
              <NavLink label="Add Post"></NavLink>
              <NavLink label="Your Posts">
                <NavLink
                  label="Post 1"
                >
                </NavLink>
                <NavLink
                  label="Post 2"
                >
                </NavLink>
                <NavLink
                  label="Post 3"
                >
                </NavLink>
                <NavLink
                  label="Post 4"
                >
                </NavLink>
                <NavLink
                  label="Post 5"
                >
                </NavLink>
              </NavLink>
              {/* <Avatar
                key={circle.id}
                src={circle.bannerImage}
              >
              </Avatar> */}
            </NavLink>
          )) }
          <NavLink
            label="With icon"
            icon={<IconHome2 size={16} stroke={1.5} />}
          />
          <NavLink
            label="Sup Dude"
            icon={<IconActivity size={16} stroke={1.5} />}
          />
        </Box>
      </Navbar>
    }
    aside={
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          <Text>Application sidebar</Text>
        </Aside>
      </MediaQuery>
    }
    footer={
      <Footer height={60} p="md">
        Application footer
      </Footer>
    }
    header={
      <Header height={70} p="md">
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

          <Text>Application header</Text>
        </div>
      </Header>
    }
  >
    <Text>Resize app to see responsive navbar in action</Text>
  </AppShell>
</>
}