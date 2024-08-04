import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import { Button, Flex, Icon, useToast } from "@chakra-ui/react";
import { RotateCw } from "lucide-react";

const PreviewPanel = () => {
  const toast = useToast(); // For displaying a toast on copy success
  const { resetData } = useTweetEditorStore();

  return (
    <Flex justifyContent={"center"} py={[0, 0, 4]}>
      <Flex
        bg="white"
        rounded={["none", "none", "lg"]}
        justifyContent={"space-between"} // Justify content to space between for better visual distribution
        // py={3}
        // px={3}
        borderTop="1px solid"
        borderColor="gray.200"
        gap="1"
        shadow={["none", "none", "lg"]}
        fontSize={"sm"}
        fontWeight={"bold"}
        w={["full", "full", "xl"]}
      >
        <Button
          leftIcon={<Icon as={RotateCw} />}
          colorScheme="red"
          variant="solid"
          w="full"
          onClick={() => resetData()}
        >
          Reset Data
        </Button>
      </Flex>
    </Flex>
  );
};

export default PreviewPanel;
