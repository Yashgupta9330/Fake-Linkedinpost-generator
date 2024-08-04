import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import { Box, Text, useEditableControls } from "@chakra-ui/react";
import { TweetTextRender } from "./TweetTextRender";

export const EditableTweetPreview = () => {
  const { tweetText } = useTweetEditorStore((state) => ({
    tweetText: state.tweetText,
  }));

  const { isEditing, getEditButtonProps } = useEditableControls();

  if (isEditing) return <></>;

  return (
    <Box
      minH={"50px"}
      rounded={"md"}
      borderRadius={"lg"}
      cursor={"pointer"}
      bg={tweetText.length ? "transparent" : "gray.100"}
      _hover={{ bg: "gray.100" }}
      {...getEditButtonProps()}
    >
      {!tweetText.length && (
        <Text
          pos={"absolute"}
          top={1}
          left={2}
          width={"full"}
          color={"gray.500"}
          userSelect={"none"}
          pointerEvents={"none"}
        >
          Enter your tweet here
        </Text>
      )}

      <TweetTextRender />
    </Box>
  );
};
