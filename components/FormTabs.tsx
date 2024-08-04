import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import { Box, Flex } from "@chakra-ui/react";

const FormTabs = () => {
  const [isPreviewMode, setPreviewMode] = useTweetEditorStore((state) => [
    state.isPreviewMode,
    state.setPreviewMode,
  ]);

  return (
    <Flex justifyContent={"center"} py={[0, 0, 4]}>
      <Flex
        bg="white"
        rounded={"lg"}
        justifyContent={"center"}
        py={3}
        px={3}
        gap="1"
        shadow={["none", "none", "lg"]}
        fontSize={"sm"}
        fontWeight={600}
        w={["full", "full", "auto"]}
      >
        <Box
          flex={1}
          bg={!isPreviewMode ? "blue" : ""}
          textColor={!isPreviewMode ? "white" : "blue"}
          position={"relative"}
          rounded={"md"}
          px="5"
          py={[2, 2, 1]}
          textAlign={"center"}
          transition={"all 0.2s ease-in-out"}
          cursor={"pointer"}
          minW={"fit-content"}
          onClick={() => setPreviewMode(false)}
        >
          Edit
        </Box>
        <Box
          flex={1}
          bg={!!isPreviewMode ? "blue" : ""}
          textColor={!!isPreviewMode ? "white" : "blue"}
          position={"relative"}
          rounded={"md"}
          px="5"
          py={[2, 2, 1]}
          textAlign={"center"}
          transition={"all 0.2s ease-in-out"}
          cursor={"pointer"}
          minW={"fit-content"}
          onClick={() => setPreviewMode(true)}
        >
          Preview
        </Box>
      </Flex>
    </Flex>
  );
};

export default FormTabs;
