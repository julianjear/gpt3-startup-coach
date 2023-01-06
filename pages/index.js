import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import {
  Text,
  Heading,
  // Image,
  Link,
  OrderedList,
  ListItem,
  HStack,
  Box,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <Heading as="h1">Omniscient Startup Coach</Heading>
          <Text>Input a challenge you are facing in your startup</Text>
          <Textarea
            resize="none"
            borderRadius="8px"
            w={"90%"}
            // w={["90%", "70%", "50%"]}
            h={"200px"}
            fontSize="20px"
            padding="8px"
          />
        </div>
      </div>
      <div className="badge-container grow">
        <a href="https://buildspace.so/builds/ai-writer" target="_blank" rel="noreferrer">
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
