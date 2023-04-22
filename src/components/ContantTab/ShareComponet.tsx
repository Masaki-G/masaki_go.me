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

type Props = {
  text: string;
  mb: string;
  mt: string;
};

const ShareComponet = (props: Props) => {
  return (
    <Center mb={props.mb} mt={props.mt}>
      <Text
        fontSize={{
          base: "24px",
          sm: "24px",
          md: "24px",
          lg: "32px",
          xl: "32px",
        }}
        as={"b"}
      >
        {props.text}
      </Text>
    </Center>
  );
};

export default ShareComponet;
