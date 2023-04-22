import { Box, Stack, Flex, Heading, Image } from "@chakra-ui/react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  HStack,
  Center,
  Text,
  VStack,
  Spacer,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import ItemSnsTag from "@/const/top/ItemsSnsTag";

const Top = () => {
  return (
    <Box
      w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
      p={"16px"}
      bg={"black"}
    >
      <HStack align={"start"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <GridItem w="100%" borderRadius={"25px"} bg={"blue"}>
            <VStack>
              <Box boxSize={"250px"}>
                <Image src="/masaki_go.me//images/202301_GOuuu_SD.png"></Image>
              </Box>
            </VStack>
          </GridItem>

          <GridItem
            w="100%"
            borderRadius={"25px"}
            bg={"white"}
            textAlign={"left"}
            p={"24px"}
          >
            <Text fontSize={"32px"} color={"blue"}>
              BACKEND &
            </Text>
            <Text fontSize={"32px"} color={"blue"}>
              FRONTEND
            </Text>
            <Text fontSize={"32px"} color={"blue"}>
              ENGINEER
            </Text>
            <Text fontSize={"24px"} mt={"10px"} color={"gray"}>
              i make the world better through IT
            </Text>
          </GridItem>

          <GridItem w="100%">
            <Wrap spacing="30px">
              {ItemSnsTag.ITEMS_SNS_TAG.map((item, index) => (
                <WrapItem key={index}>
                  <Link href={item.url} isExternal>
                    <Tag size="lg" borderRadius="full">
                      <Avatar src={item.icon} size="xs" name="Segun Adebayo" />
                      <TagLabel>{item.name}</TagLabel>
                    </Tag>
                  </Link>
                </WrapItem>
              ))}
            </Wrap>
          </GridItem>
        </Grid>
      </HStack>
      <VStack>
        <Text color={"white"} fontSize={"48px"} as={"b"}>
          Masaki Go
        </Text>
      </VStack>
    </Box>
  );
};

export default Top;
