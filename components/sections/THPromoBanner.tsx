import TwitterIcon from "@/icons/TwitterIcon";
import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { Check } from "lucide-react";

const PromoBanner = () => {
  return (
    <Box
      bgGradient={"linear(to-r, black, tweethunter.500)"}
      py={"24"}
      color="white"
      position={"relative"}
    >
      <Container maxW="5xl">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          <Box>
            <Text fontSize="2xl" mb={4} fontWeight={"bold"}>
              Growing your audience and business on Twitter?
            </Text>
            <Text fontSize="lg" mb={4}>
              Discover the AI-powered, all-in-one Twitter tool.
            </Text>

            <List spacing={2} fontSize={"md"} mb={4}>
              <ListItem>
                <ListIcon as={Check} color="white" />
                Create high-performing Twitter content in seconds
              </ListItem>
              <ListItem>
                <ListIcon as={Check} color="white" />
                Leverage advanced scheduListItemng and automations
              </ListItem>
              <ListItem>
                {" "}
                <ListIcon as={Check} color="white" />
                Engage with relevant accounts
              </ListItem>
              <ListItem>
                {" "}
                <ListIcon as={Check} color="white" />
                Monitor your analytics
              </ListItem>
            </List>

            <Link
              href="https://tweethunter.io/?utm_source=fake-tweet-generator"
              target="_blank"
            >
              <Button
                bg="twitter.500"
                leftIcon={<Icon as={TwitterIcon} />}
                color={"white"}
                _hover={{ bg: "twitter.400" }}
                width={{ base: "full", md: "auto" }}
                my="4"
              >
                Try it for free
              </Button>
            </Link>
          </Box>
          <Image
            pos={"absolute"}
            top="50%"
            right="0"
            display={{ base: "none", md: "block" }}
            maxH={"80%"}
            transform="translateY(-50%)"
            roundedLeft={"lg"}
            src={"/assets/tweet-hunter-ss.png"}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default PromoBanner;
