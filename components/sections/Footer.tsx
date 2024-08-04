import {
  Box,
  Button,
  Container,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { WidthContainer } from "components/layoutHelper/WidthContainer";
// import { readings } from "components/readings";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { useTweetHunterUrl } from "utils/useTweetHunterUrl";
// import logoDark from "./taplioDark.svg";

const GetTaplioButton = ({}) => {
  const url = "https://tweethunter.io/?utm_source=tweet-generator";
  return (
    <Button
      shadow={"lg"}
      placeContent={"center"}
      alignItems={"center"}
      color={"gray.700"}
      {...{
        bg: "tweethunter.0",
      }}
      _hover={{
        bg: "tweethunter.100",
      }}
      fontSize="lg"
      size="lg"
      paddingX="8"
      as={"a"}
      target="_blank"
      href={url}
      onClick={() => {
        // Analytics.log("hit_taplio_extension_link", { source: "challenge" });
      }}
    >
      <FaExternalLinkAlt style={{ marginBottom: "4px" }} />
      <Text ml="2">Discover Taplio</Text>
    </Button>
  );
};

const ProductHunt = () => (
  <a
    href="https://www.producthunt.com/posts/taplio-for-linkedin?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-taplio&#0045;for&#0045;linkedin"
    target="_blank"
  >
    <img
      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=366363&theme=light&period=daily"
      alt="Taplio&#0032;for&#0032;LinkedIn - The&#0032;all&#0045;in&#0045;one&#0032;tool&#0032;to&#0032;grow&#0032;your&#0032;personal&#0032;brand&#0032;on&#0032;LinkedIn | Product Hunt"
      style={{
        width: "200px",
        height: "54px",
      }}
    />
  </a>
);

const Col1 = () => (
  <Grid placeItems={"start"} gridTemplateRows="auto auto 1fr" gap="2">
    {/* <Logo fontSize={fontSize} iconSize={iconSize} /> */}
    {/* <IconLogo icon={false} color="white" /> */}
    <Box py={4}>
      <a
        href="https://www.producthunt.com/posts/tweet-hunter-for-twitter?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-tweet&#0045;hunter&#0045;for&#0045;twitter"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=317360&theme=light&period=daily"
          alt="Tweet&#0032;Hunter&#0032;for&#0032;Twitter - AI&#0032;powered&#0032;Twitter&#0032;growth&#0032;&#0038;&#0032;scheduling&#0032;for&#0032;makers | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
    </Box>
    <Text>TweetHunter © 2023</Text>
  </Grid>
);

export interface Tool {
  link: string;
  title: string;
  description: string;
}
interface FooterProps {
  tools: Tool[];
}
export const Footer: React.FC<FooterProps> = ({ tools = [] }) => {
  return (
    <Grid
      mt="24"
      py="24"
      color={useColorModeValue("tweethunter.50", "tweethunter.300")}
      bgGradient={useColorModeValue(
        "linear(to-b, tweethunter.800, tweethunter.500)",
        "linear(to-b, tweethunter.850, tweethunter.800)"
      )}
      fontSize={"xs"}
    >
      <Container maxW="5xl">
        <Grid
          gridTemplateColumns={["auto", null, "repeat(3, 1fr)"]}
          gridTemplateRows={["repeat(3, 1fr)", null, "auto"]}
          gridTemplate={[
            `
            "b" 1fr
            "a" 1fr
            `,
            null,
            `
            "b a"
            / 1fr 1fr 
            `,
          ]}
          justifyContent="space-between"
          gap="8"
        >
          <Col1 />
          <Grid placeContent={"start"} gridArea={"b"}>
            <Text
              color={useColorModeValue("tweethunter.100", "tweethunter.200")}
              fontWeight="600"
              fontSize={"lg"}
              pb="4"
            >
              🛠 Grab our (free) LinkedIn tools
            </Text>
            {tools.map((item, mapIndex) => (
              <Link
                key={mapIndex}
                href={item.link + "?utm_source=fake-tweet-generator"}
                target="_blank"
              >
                <Grid
                  placeContent={"start"}
                  _hover={{
                    bg: useColorModeValue("tweethunter.400", "tweethunter.600"),
                  }}
                  borderRadius="lg"
                  px="4"
                  py="2"
                  ml="-4"
                  fontWeight="600"
                  color={useColorModeValue(
                    "tweethunter.100",
                    "tweethunter.200"
                  )}
                >
                  {item.title}
                  <Text
                    color={useColorModeValue(
                      "tweethunter.200",
                      "tweethunter.400"
                    )}
                    fontWeight="300"
                    fontSize={"xs"}
                  >
                    {item.description}
                  </Text>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
