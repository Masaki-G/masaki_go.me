import { Box, Stack, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  WrapItem,
  Wrap,
  Button,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

import { PhoneIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import WorkExpirienceContents from "@/const/work/ItemsWorkExpirienceContents";

const work = () => {
  return (
    <Accordion allowMultiple>
      {WorkExpirienceContents.ITEMS_WORK_EXPIRIENCE_CONTENTS.map(
        (item, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={"24px"} as={"b"}>
                      {item.title}
                    </Text>
                    <br></br>
                    <Text as={"b"} color={"blue"}>
                      {item.occupation}
                    </Text>
                    <Text color={"blue.600"}>{item.date}</Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel>
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem
                      colSpan={{
                        base: 5,
                        sm: 5,
                        md: 4,
                        lg: 3,
                        xl: 3,
                      }}
                      bg="gray.200"
                      p={"16px"}
                    >
                      <Text
                        fontSize={"16px"}
                        fontFamily={"mono"}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.text}
                      </Text>
                    </GridItem>

                    <GridItem
                      colSpan={{ base: 5, sm: 5, md: 1, lg: 2, xl: 2 }}
                      bg="papayawhip"
                      p={"16px"}
                    >
                      <Wrap spacing={2}>
                        {item.tool.map((tool, index) => (
                          <WrapItem key={index}>
                            <Tooltip
                              label={tool}
                              hasArrow
                              arrowSize={10}
                              size={"xs"}
                              closeDelay={500}
                              bg={"white"}
                              color={"black"}
                            >
                              <Button
                                size={"sm"}
                                bg={"black"}
                                color={"white"}
                                colorScheme="black"
                              >
                                {tool}
                              </Button>
                            </Tooltip>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </GridItem>
                  </Grid>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        )
      )}
    </Accordion>
  );
};

export default work;
