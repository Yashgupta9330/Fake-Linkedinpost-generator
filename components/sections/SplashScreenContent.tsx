import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import TweetHunterIcon from "@/icons/TweetHunterIcon";
import Link from "next/link";

export function SplashScreenContent() {
  return (
    <Box
      minH={"100vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      px="12"
      display={["none", "none", "flex"]}
      pos={"relative"}
    >
      <Link href="https://tweethunter.io/">
        <>
          <Flex
            alignItems={"center"}
            gap="2"
            pos={"absolute"}
            top="0"
            left="0"
            w="full"
            px="12"
            py="6"
          >
            <Icon w={8} h={8} as={TweetHunterIcon} />
            <Text fontSize={"xl"} fontWeight={"600"}>
              Tweet Hunter
            </Text>
          </Flex>
        </>
      </Link>
      <Text fontSize={"5xl"} fontWeight={"black"} as="h1">
        Tweet Generator
      </Text>
      <Text fontSize={"lg"}>
        Generate mock screenshots of tweets easily and for free.
      </Text>
      <Text my="6">
        Create realistic mockup tweets with this cutting-edge Tweet Generator.
        Ideal for pranking your friends, strategizing, interface designing,
        studying social impacts. Simulate user handles, content, hashtags, and
        engagement metrics
      </Text>
    </Box>
  );
}
