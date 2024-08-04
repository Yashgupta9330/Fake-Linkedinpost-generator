import BookmarkIcon from "@/icons/BookmarkIcon";
import CommentIcon from "@/icons/CommentIcon";
import LikeIcon from "@/icons/LikeIcon";
import RetweetIcon from "@/icons/RetweetIcon";
import ShareIcon from "@/icons/ShareIcon";
import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Flex,
  Icon,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { RotateCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AvatarInput from "./AvatarInput";
import DateEditable from "./DateEditable";
import { EditableTweetPreview } from "./EditableTweetPreview";
import { HelpTextForEditable } from "./HelpTextForEditable";
import { HideInEditable } from "./HideInEditable";
import MetricEditable from "./MetricEditable";
import TweetImageUpload from "./TweetImageUpload";
import { VerificationBadgeInput } from "./VerificationBadgeInput";

export const editableTextProps = {
  contentEditable: true,
  transition: "all 0.2s",
  rounded: "md",
  cursor: "pointer",
  _hover: {
    bg: "gray.100",
    cursor: "cursor",
  },
  _focus: {
    bg: "gray.100",
    border: "none",
    boxShadow: "none",
    outline: "none",
  },
};

export const EditableTweetCard = () => {
  const {
    id,
    tweetText,
    setTweetText,
    name,
    username,
    setName,
    setUsername,
    viewCount,
    setViewCount,
    resetData,
    ...tweetData
  } = useTweetEditorStore();

  const [isEditingTweet, setIsEditingTweet] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.max(textareaRef.current.scrollHeight, 50);

      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [tweetText, isEditingTweet]);

  return (
    <Box
      key={id}
      shadow={["none", "none", "lg"]}
      rounded={"lg"}
      p={[0, 0, 4]}
      bg="white"
      w={["full", "full", "550px"]}
    >
      {/* Tweet header */}
      <Flex>
        <AvatarInput />
        <Box flex={1} fontSize={"15px"}>
          {/* User name */}
          <Editable
            onChange={(e) => setName(e)}
            defaultValue={name}
            display={"block"}
            rounded={"md"}
            position={"relative"}
            isPreviewFocusable={true}
            selectAllOnFocus={true}
            cursor={"pointer"}
          >
            <Flex alignItems={"center"} justifyContent={"space-between"} gap="1">
              <EditablePreview
                py="0"
                fontWeight={"bold"}
                w="full"
                maxW="fit-content"
                _hover={{ bg: "gray.100" }}
                minH={"1.2rem"}
              />
               <EditableInput
                py="0"
                fontWeight={"bold"}
                rounded={"md"}
                w="full"
                bg="gray.100"
                _focus={{ boxShadow: "none", outline: "none" }}
              />
              <VerificationBadgeInput />
            </Flex>

            <HelpTextForEditable
              text={`${Math.max(name.length - 1, 0)}/50 characters`}
            />
          </Editable>

          <Editable
            onChange={(e) => setUsername(e)}
            defaultValue={username}
            display={"block"}
            rounded={"md"}
            position={"relative"}
            isPreviewFocusable={true}
            selectAllOnFocus={true}
            cursor={"pointer"}
            minW={"100"}
            fontSize={"sm"}
            color={"gray.500"}
          >
            <Flex rounded={"md"} _hover={{ bg: "gray.100" }} w="full">
              <EditablePreview w="full" py="0" />
            </Flex>

            <Flex
              rounded={"md"}
              _focusWithin={{ bg: "gray.100" }}
              w="fit-content"
            >
              <EditableInput
                py="0"
                maxW={"fit-content"}
                _focus={{ boxShadow: "none", outline: "none" }}
              />
            </Flex>

            <HelpTextForEditable
              text={`${Math.max(
                username.length - 1,
                0
              )}/15 characters. Should only be numbers, letters, and _ characters.`}
            />
          </Editable>
          <DateEditable />
        </Box>
        <Box>
          <Button
            onClick={() => resetData()}
            colorScheme="gray"
            variant={"ghost"}
            aria-label="reset data"
            leftIcon={<Icon as={RotateCw} />}
          >
            Reset
          </Button>
        </Box>
      </Flex>

      {/* Tweet body */}
      <Box pos={"relative"}>
        <Editable
          onFocus={() => setIsEditingTweet(true)}
          onBlur={() => setIsEditingTweet(false)}
          onChange={(e) => setTweetText(e)}
          defaultValue={tweetText}
          display={"block"}
          rounded={"md"}
          my={2}
          position={"relative"}
          isPreviewFocusable={true}
          selectAllOnFocus={true}
        >
          <EditableTweetPreview />

          <EditableTextarea
            rounded={"md"}
            bg="gray.100"
            ref={textareaRef}
            _focus={{ boxShadow: "none", outline: "none" }}
          />

          <HelpTextForEditable text={`${tweetText.length}/280 characters`} />
        </Editable>
      </Box>

      <TweetImageUpload />

      <Flex
        display={"inline-flex"}
        fontSize={"md"}
        mt="4"
        alignItems={"center"}
        color="lightGray"
      >
       
        <Box fontSize={"sm"} display={"inline-flex"}>
          <MetricEditable
            value={viewCount}
            onChange={setViewCount}
            label="Views"
          />
        </Box>
      </Flex>
      <Box h={"1px"} bg="gray.200" my="2" />
      <Wrap gap="4" justifyContent={"flex-start"} mt="2" fontSize={"sm"}>
        <MetricEditable
          value={tweetData.retweetsCount}
          onChange={tweetData.setRetweetsCount}
          label="Retweets"
        />
        <MetricEditable
          value={tweetData.quoteTweetsCount}
          onChange={tweetData.setQuoteTweetsCount}
          label="Quotes"
        />
        <MetricEditable
          value={tweetData.likesCount}
          onChange={tweetData.setLikesCount}
          label="Likes"
        />
        <MetricEditable
          value={tweetData.bookmarkCount}
          onChange={tweetData.setBookmarkCount}
          label="Bookmarks"
        />
      </Wrap>
      <Box h={"1px"} bg="gray.200" mt="2" />
      <Wrap
        gap="2"
        justifyContent={"space-between"}
        mt="3"
        alignItems={"center"}
      >
        <Flex flex={1} alignContent={"center"}>
          <Icon h="18px" w="18px" color="gray.500" as={CommentIcon} />
        </Flex>
        <Flex flex={1} alignContent={"center"}>
          <Icon h="18px" w="18px" color="gray.500" as={RetweetIcon} />
        </Flex>
        <Flex flex={1} alignContent={"center"}>
          <Icon h="18px" w="18px" color="gray.500" as={LikeIcon} />
        </Flex>
        <Flex flex={1} alignContent={"center"}>
          <Icon h="18px" w="18px" color="gray.500" as={BookmarkIcon} />
        </Flex>
        <Flex flex={1} alignContent={"center"}>
          <Icon h="18px" w="18px" color="gray.500" as={ShareIcon} />
        </Flex>
      </Wrap>
    </Box>
  );
};
