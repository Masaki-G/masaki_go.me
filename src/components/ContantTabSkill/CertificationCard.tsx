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
import { Link } from "@chakra-ui/react";

import ItemsCertificationCard from "@/const/ItemsCertificationCard";

const CertificationCard = () => {
  return (
    <>
      {ItemsCertificationCard.ITEMS_CERTIFICATION_CARD.map((item, index) => (
        <Link href={item.url} key={index}>
          <Card
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
          >
            <CardBody textAlign={"center"}>
              <Image
                src={item.image}
                alt={item.text}
                borderRadius="lg"
                m={"0 auto"}
              />
              <Stack mt="6">
                <Heading size="sm">{item.text}</Heading>
              </Stack>
            </CardBody>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default CertificationCard;
