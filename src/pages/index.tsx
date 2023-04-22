import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Top from "@/components/Top";
import ContentTab from "@/components/ContentTab";
import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Top />

      <ContentTab />
    </Box>
  );
}
