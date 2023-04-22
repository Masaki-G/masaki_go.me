import { Box, Stack, Flex, Heading, Image } from "@chakra-ui/react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  HStack,
  Center,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import LanguageCard from "./ContantTabSkill/LanguageCard";
import CertificationCard from "./ContantTabSkill/CertificationCard";
import Work from "./ContantTabProfile/work";
import Experience from "./ContantTabProfile/Experience";
import ShareComponet from "./ContantTab/ShareComponet";
const ContentTab = () => {
  return (
    <Box>
      <Tabs isFitted variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue" }} as={"b"}>Profile</Tab>
          <Tab _selected={{ color: "white", bg: "blue" }} as={"b"}>Skill</Tab>
          <Tab _selected={{ color: "white", bg: "blue" }} as={"b"} >Notes</Tab>
        </TabList>

        <TabPanels>
          <TabPanel width={"80%"} margin={"0 auto"}>
            <ShareComponet text="WorkExprience" mb="10px" mt="0px" />
            <Work />
            <ShareComponet text="Experience" mb="10px" mt="10px" />
            <Experience />
          </TabPanel>

          <TabPanel width={"80%"} margin={"0 auto"}>
            <ShareComponet text="Language" mb="10px" mt="0px" />
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              spacing={5}
            >
              <LanguageCard />
            </SimpleGrid>

            <ShareComponet text="Certification" mb="10px" mt="10px" />
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              spacing={5}
            >
              <CertificationCard />
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <Center>
              <p>メンテナンス中</p>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ContentTab;
