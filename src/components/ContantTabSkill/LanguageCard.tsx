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
} from "@chakra-ui/react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import ItemsLanguageCard from "@/const/ItemsLanguageCard";

const LanguageCard = () => {
  return (
    <>
      {ItemsLanguageCard.ITEMS_LANGUAGE_CARD.map((item, index) => (
        <Card
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          }}
          key={index}
        >
          <CardBody m={"0 auto"} textAlign={"center"}>
            <Image src={item.image} alt={item.text} borderRadius="lg" />

            <Stack mt="6">
              <Heading size="sm" textAlign={"center"}>
                {item.text}
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default LanguageCard;
