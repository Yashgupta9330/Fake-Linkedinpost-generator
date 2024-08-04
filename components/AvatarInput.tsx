import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import { Avatar, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { UploadIcon } from "lucide-react";
import React, { useCallback, useRef } from "react";

const AvatarInput: React.FC = () => {
  const { profilePicture, setProfilePicture } = useTweetEditorStore();
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
      setProfilePicture(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    // <Box rounded={"full"} h="12" w="12" bg="gray.200" mr="4" />

    <Flex
      rounded={"full"}
      bg="gray.200"
      mr="4"
      h="12"
      w="12"
      overflow={"hidden"}
      //   border="2px dashed"
      //   borderColor={"gray.200"}
      cursor={"pointer"}
      _hover={{ bg: "gray.400" }}
      transition={"all 0.2s"}
      onDrop={onDrop}
      onDragOver={(event) => event.preventDefault()}
      onClick={handleClick}
      pos={"relative"}
    >
      {!!profilePicture?.length && (
        <Avatar
          objectFit={"cover"}
          h={12}
          w={12}
          transition={"all 0.2s"}
          _hover={{ opacity: 0.4 }}
          src={profilePicture}
        />
      )}
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
        opacity={profilePicture?.length ? 0 : 1}
        transition={"all 0.2s"}
        bg="whiteAlpha.700"
        _hover={{
          opacity: 1,
        }}
      >
        <Icon as={UploadIcon} h="4" w="4" color="gray.700" />
      </Flex>
    </Flex>
  );
};

export default AvatarInput;
