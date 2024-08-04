import { Box, Container, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const HowItWorksSection = () => {
  return (
    <Box py={"24"}>
      <Container maxW="5xl">
        <Text
          fontSize="5xl"
          mb={6}
          fontWeight={"bold"}
          textAlign={"center"}
          as="h2"
        >
          How It Works
        </Text>
        <Grid
          templateAreas={{
            base: `
              "image1"
              "text1"
              "image2"
              "text2"
              "image3"
              "text3"
            `,
            md: `
              "text1 image1"
              "image2 text2"
              "text3 image3"
            `,
          }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
          alignItems={"center"}
        >
          <Box
            backgroundColor="white"
            p={5}
            borderRadius="md"
            gridArea={"text1"}
          >
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Create fake tweets that look just like the real thing
            </Text>
            <Text color="gray.500">
              Whether you want to pull a prank or see what it feels like when
              you get a million views on your tweet, our fake tweet creator is
              here to help.
            </Text>
          </Box>
          <Box p={5} gridArea={"image1"}>
            <Image
              w="full"
              src="/assets/how-it-works-section/fake-tweets.png"
              alt="Step 1"
            />
          </Box>
          <Box
            backgroundColor="white"
            p={5}
            borderRadius="md"
            gridArea={"text2"}
          >
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Customize your tweet with any profile pic, handle, text and media
            </Text>
            <Text color="gray.500">
              Our free fake tweet generator helps you create any tweet like it’s
              been posted from any account.
              <br />
              <br />
              You can add your profile picture (or someone else’s), any Twitter
              username and @handle, and of course you can type in your own text
              and media.
            </Text>
          </Box>
          <Box p={5} gridArea={"image2"}>
            <Image
              w="full"
              src="/assets/how-it-works-section/customize.png"
              alt="Step 1"
            />
          </Box>
          <Box
            backgroundColor="white"
            p={5}
            borderRadius="md"
            gridArea={"text3"}
          >
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Add engagement and views
            </Text>
            <Text color="gray.500">
              Likes, retweets, quote retweets, bookmarks and views. You can add
              anything to any tweet you create to make it feel more real.
            </Text>
          </Box>
          <Box p={5} gridArea={"image3"}>
            <Image
              w="full"
              src="/assets/how-it-works-section/metrics.svg"
              alt="Step 3"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
