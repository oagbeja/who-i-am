import Head from "next/head";
import { ReactNode } from "react";
import Container from "./Container";
import Navbar from "./NavBar";

interface PropsT {
  children: ReactNode;
}

const siteTitle = "Who I am";

export default function Layout({ children }: PropsT) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
