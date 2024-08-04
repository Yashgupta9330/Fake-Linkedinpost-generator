import CommentIcon from "@/icons/CommentIcon";
import { Box, Flex, Icon, Input } from "@chakra-ui/react";
import React, { useState } from "react";

interface TweetButtonWithInputProps {
  IconSvg: React.FC;
  value: number;
  setValue: (value: number) => void;
}
const TweetButtonWithInput: React.FC<TweetButtonWithInputProps> = ({
  IconSvg,
  value,
  setValue,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <Flex
      p="2"
      _hover={{ bg: "gray.200" }}
      rounded={"lg"}
      cursor={"pointer"}
      transition={"all 0.2s ease-in-out"}
      _focusWithin={{ bg: "gray.200" }}
      onClick={() => inputRef.current?.focus()}
      //   onClick={() => setShowInput(true)}
      alignItems={"center"}
    >
      <Icon h="4" w="4" as={IconSvg} />
      <Input
        h={"25px"}
        ref={inputRef}
        //   maxW={"30px"}

        type="number"
        p={1}
        ml="2"
        value={value}
        border={"none"}
        _hover={{ border: "none", boxShadow: "none", bg: "transparent" }}
        _focus={{ border: "none", boxShadow: "none", bg: "transparent" }}
        fontSize={"sm"}
        onChange={(e) => setValue(Number(e.target.value || 0))}
      />
    </Flex>
  );
};

export default TweetButtonWithInput;
