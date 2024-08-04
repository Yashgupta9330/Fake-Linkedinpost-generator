import { Theme, useTweetEditorStore } from "@/store/useTweetEditorStore";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons"; // Import necessary icons
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  Wrap,
  useColorMode,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import { saveAs } from "file-saver";
import { useEffect } from "react";
import { RadioCard } from "./RadioCard";

const getImageBlog = async (image: string) => {
  const base64Response = await fetch(image);
  return base64Response.blob();
};

const EditorPanel = () => {
  const toast = useToast(); // For displaying a toast on copy success
  const { theme, setTheme, setPreviewMode, imagePreview } =
    useTweetEditorStore();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!theme) {
      if (colorMode === "light") {
        setTheme(Theme.Light);
      } else {
        setTheme(Theme.Dark);
      }
    }
  }, [theme]);

  const handleCopy = async () => {
    try {
      if (!imagePreview) return;

      // `navigator.clipboard.writeText` takes a string and puts it on the clipboard.
      // This would be your base64 encoded image URL.
      const blob = await getImageBlog(imagePreview);

      const items = [
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ];

      await navigator.clipboard.write(items);

      // If successful, show a toast.
      toast({
        title: "Image copied",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Failed to copy image",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDownload = async () => {
    try {
      if (!imagePreview) return;
      // Here we are creating a Blob from our base64 image
      // We split the base64 string to remove the data URL part (i.e., 'data:image/png;base64,')
      const blob = await getImageBlog(imagePreview);
      saveAs(blob, "image.png");

      // On successful download, show a toast.
      toast({
        title: "Image downloaded",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Failed to download image",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleThemeChange = (value: string | string[]) => {
    setTheme(value as Theme);
    setPreviewMode(true);
  };

  const options = [Theme.Light, Theme.Dark, Theme.Dim];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "theme",
    defaultValue: colorMode === "light" ? Theme.Light : Theme.Dark,
    value: theme,
    onChange: handleThemeChange,
  });

  const group = getRootProps();

  return (
    <Flex justifyContent={"center"} py={[0, 0, 5]}>
      <Wrap
        bg="white"
        rounded={["none", "none", "lg"]}
        justifyContent={"space-between"} // Justify content to space between for better visual distribution
        px={3}
        py={3}
        borderTop="1px solid"
        borderColor="gray.200"
        gap="1"
        shadow={["none", "none", "lg"]}
        fontSize={"sm"}
        fontWeight={"bold"}
        w={["full", "full", "xl"]}
      >
        <Flex flex={1} fontWeight={"semibold"} alignItems={"center"} w={"full"}>
          <Text>Theme:</Text>
          <HStack ml={2} {...group} flex={1} w={"full"}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard w={"full"} flex={1} key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </Flex>
        <Flex
          w={["full", "full", "auto"]}
          fontWeight={"semibold"}
          alignItems={"center"}
          gap={2}
        >
          <IconButton
            size={"sm"}
            aria-label="Copy"
            icon={<CopyIcon />}
            onClick={handleCopy}
          />

          <Button
            leftIcon={<DownloadIcon />}
            size={"sm"}
            onClick={handleDownload}
            bg="blue"
            _hover={{ bg: "lightBlue" }}
            _focus={{ bg: "lightBlue" }}
            color="white"
            flex={[1, 1, "auto"]}
          >
            Download
          </Button>
        </Flex>
      </Wrap>
    </Flex>
  );
};

export default EditorPanel;
