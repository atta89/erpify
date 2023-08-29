import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Head from "next/head";

import { ElevateAppBar } from "@/components/navbar";
import Footer from "@/components/footer";

const index: FC<{
  children: ReactNode;
  title?: string;
}> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        id="home_section"
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <ElevateAppBar />
        <Box flexGrow={1}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default index;
