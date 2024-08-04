import { Box, Container, Grid, Text } from "@chakra-ui/react";
import React from "react";

// Sample FAQ component
const FAQ = ({ question, answer }: { question: string; answer: string }) => (
  <Box backgroundColor="white" p={5} borderRadius="md">
    <Text fontSize="lg" fontWeight="bold" mb={2}>
      {question}
    </Text>
    <Text color="gray.500" whiteSpace={"pre-line"}>
      {answer}
    </Text>
  </Box>
);

const FaqSection = () => {
  const faqs = [
    {
      question: "What is the Fake Tweet Generator used for?",
      answer: `The Fake Tweet Generator is a tool designed to simulate fake tweets. It allows you to create tweets as if they were posted on Twitter. It includes details like the user handle, tweet content, hashtags, and even engagement metrics like retweets and likes.`,
    },
    {
      question:
        "Do I need to sign in with my Twitter account to use the Fake Tweet Generator?",
      answer: `No, you don't need to sign in with your Twitter account to use the Fake Tweet Generator. The tool operates independently of your Twitter account and simply creates visual representations of potential tweets.`,
    },
    {
      question:
        "How does the Fake Tweet Generator simulate engagement metrics?",
      answer: `The Fake Tweet Generator allows you to manually set simulated engagement metrics for each tweet, such as retweets and likes. This feature helps visualize potential social engagement, although it does not predict actual engagement. It's a useful tool for crafting tweets and seeing how they would look in a live environment.`,
    },
  ];

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
          Frequently Asked Questions
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FaqSection;
