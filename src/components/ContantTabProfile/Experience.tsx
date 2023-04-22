import {
  ChakraProvider,
  Box,
  VStack,
  Text,
  Badge,
  Grid,
  HStack,
} from "@chakra-ui/react";

import { Tooltip } from "@chakra-ui/react";
import ItemsExpirienceContents from "@/const/work/ItemsExpirienceContents";
const Experience = () => {
  return (
    <Box
      bg="black"
      mx="auto"
      p={{ base: "20px", sm: "20px", md: "30px", lg: "30px", xl: "30px" }}
      borderRadius="md"
      boxShadow="xl"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
          xl: "repeat(1, 1fr)",
        }}
        gap={{ base: "10px", md: "20px", lg: "20px", xl: "20px" }}
      >
        {ItemsExpirienceContents.ITEMS_EXPIRIENCE_CONTENTS.map(
          (company, index) => (
            <Box
              key={index}
              bg="white"
              p={{ base: "10px", md: "20px", lg: "20px", xl: "20px" }}
              borderRadius="md"
              boxShadow="sm"
            >
              <Badge
                fontSize="sm"
                colorScheme="gray"
                mb={{ base: "5px", md: "10px", lg: "10px", xl: "10px" }}
              >
                {company.period}
              </Badge>
              <VStack
                spacing={{ base: "5px", md: "10px", lg: "10px", xl: "10px" }}
                align="stretch"
              >
                <Text
                  fontSize={{ base: "md", md: "xl", lg: "xl", xl: "xl" }}
                  fontWeight="bold"
                  mb={{ base: "5px", md: "10px", lg: "10px", xl: "10px" }}
                >
                  {company.name}
                </Text>
                <Text fontSize={{ base: "sm", md: "md", lg: "md", xl: "md" }}>
                  {company.text}
                </Text>
              </VStack>
            </Box>
          )
        )}
      </Grid>
    </Box>
  );
};

export default Experience;
