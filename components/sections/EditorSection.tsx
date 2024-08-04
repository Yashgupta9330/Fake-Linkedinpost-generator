import { CustomHead } from "@/components/CustomHead";
import { EditableTweetCard } from "@/components/EditableTweetCard";
import EditorPanel from "@/components/EditorPanel";
import FormTabs from "@/components/FormTabs";
import { TweetData, useTweetEditorStore } from "@/store/useTweetEditorStore";
import { Box, Flex, Grid, GridItem, SlideFade } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { use100vh } from "react-div-100vh";
import { TweetCard } from "../TweetCard";
import { SplashScreenContent } from "./SplashScreenContent";

export function EditorSection() {
  const router = useRouter();
  const { isPreviewMode, resetData, ...otherData } = useTweetEditorStore();
  const height = use100vh();

  useEffect(() => {
    try {
      const { tweetText, name, username } = router.query;

      const defaultData: Partial<TweetData> = {};
      // add default data here if it's a valid value
      if (!!tweetText?.length) {
        defaultData["tweetText"] = tweetText.toString();
      }
      if (!!name?.length) {
        defaultData["name"] = name.toString();
      }
      if (!!username?.length) {
        defaultData["username"] = username.toString();
      }

      resetData(defaultData);
    } catch (error) {
      console.error(error);
    }
  }, [router]);

  return (
    <Grid
      templateColumns={["1fr", "1fr", "repeat(5, 1fr)"]}
      alignItems={"stretch"}
      flexDirection={"column"}
    >
      <CustomHead />

      <GridItem colSpan={2} bg="white">
        <SplashScreenContent />
      </GridItem>

      <GridItem
        colSpan={[1, 1, 3]}
        bg={["transparent", "transparent", "gray.100"]}
        shadow={["none", "none", "lg"]}
        border={["none", "none", "1px solid"]}
        borderColor={["transparent", "transparent", "gray.200"]}
        roundedBottomLeft={"md"}
      >
        <Flex
          h={height || "100vh"}
          flexDirection={"column"}
          w={"100%"}
          overflow={"auto"}
          position={"relative"}
        >
          <Box
            position={"sticky"}
            zIndex={100}
            top={0}
            left={0}
            w="full"
            border={"1px solid"}
            borderColor={["gray.200", "transparent", "transparent"]}
          >
            <FormTabs />
          </Box>

          <Box
            zIndex={90}
            flex={1}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box
              position={["initial", "initial", "absolute"]}
              top={["initial", "initial", "50%"]}
              left={["initial", "initial", "50%"]}
              transform={["initial", "initial", "translate(-50%, -50%)"]}
              w={["full", "full", "fit-content"]}
              px={3}
            >
              <SlideFade unmountOnExit offsetX="-300px" in={!isPreviewMode}>
                <EditableTweetCard />
              </SlideFade>
            </Box>

            <Box>
              <SlideFade unmountOnExit offsetX="300px" in={!!isPreviewMode}>
                <TweetCard />
              </SlideFade>
            </Box>
          </Box>

          <Box position={"sticky"} zIndex={100} bottom={0} left={0} w="full">
            <EditorPanel />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
