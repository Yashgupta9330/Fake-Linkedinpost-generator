import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Fade,
  Flex,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { UploadIcon } from "lucide-react";
import React, { useCallback, useRef } from "react";

const TweetImageUpload: React.FC = () => {
  const { imageUrl, setImageUrl } = useTweetEditorStore();
  //   const [imageData, setImageData] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
  }, []);

  const handleFileUpload = (file?: File) => {
    if (!file) return;

    let reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleResetClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => {
      setImageUrl("");
    }, 1000);
  };

  return (
    <>
      <Flex
        rounded={"md"}
        border="3px dashed"
        borderColor={"gray.200"}
        cursor={"pointer"}
        gap={"2"}
        _hover={{ bg: "gray.100" }}
        transition={"all 0.2s"}
        onDrop={onDrop}
        onDragOver={(event) => event.preventDefault()}
        onClick={handleClick}
        minH={"80px"}
        pos={"relative"}
      >
        {!!imageUrl?.length && (
          <IconButton
            position={"absolute"}
            top={2}
            right={2}
            aria-label="X"
            bg="whiteAlpha.600"
            color="blackAlpha.600"
            icon={<CloseIcon />}
            zIndex={100}
            onClick={handleResetClick}
          />
        )}
        <Image
          transition={"all 0.2s"}
          _hover={{ opacity: 0.4 }}
          rounded={"md"}
          src={imageUrl}
          maxHeight={300}
          objectFit={"cover"}
          w={"full"}
        />
        <input
          type="file"
          style={{ display: "none" }}
          onChange={(event) => handleFileUpload(event.target.files?.[0])}
          ref={inputRef}
        />
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          h="full"
          textAlign={"center"}
          gap={"2"}
          pos={"absolute"}
          opacity={imageUrl?.length ? 0 : 1}
          transition={"all 0.2s"}
          bg="whiteAlpha.700"
          _hover={{
            opacity: 1,
          }}
        >
          <Icon as={UploadIcon} h="4" w="4" color="gray.700" />
          <Text fontSize={"sm"}>Drag and drop or click here to add image</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default TweetImageUpload;
