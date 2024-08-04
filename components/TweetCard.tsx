import BookmarkIcon from "@/icons/BookmarkIcon";
import CommentIcon from "@/icons/CommentIcon";
import LikeIcon from "@/icons/LikeIcon";
import RetweetIcon from "@/icons/RetweetIcon";
import ShareIcon from "@/icons/ShareIcon";
import { Theme, useTweetEditorStore } from "@/store/useTweetEditorStore";
import ReactTimeago from 'react-timeago';
import { formatNumber } from "@/utils/formatNumber";
import {
  AbsoluteCenter,
  Avatar,
  Box,
  Flex,
  Icon,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { useToPng } from "@hugocxl/react-to-image";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import SelectedVerificationBadge from "./SelectedVerificationBadge";
import { TweetTextRender } from "./TweetTextRender";
import TimeAgoWithIcon from "./DateViewer";

interface TwitterThemeConfig {
  bg: string;
  color: string;
  subtextColor: string;
  borderColor: string;
}

const themeMap: Record<Theme, TwitterThemeConfig> = {
  [Theme.Light]: {
    bg: "white",
    color: "black",
    subtextColor: "#536471",
    borderColor: "#eff3f4",
  },
  [Theme.Dark]: {
    bg: "black",
    color: "#e7e9ea",
    subtextColor: "#71767b",
    borderColor: "#2f3336",
  },
  [Theme.Dim]: {
    bg: "#15202b",
    color: "#f7f9f9",
    subtextColor: "#8b98a5",
    borderColor: "#38444d",
  },
};

export const TweetCard = () => {
  const tweetData = useTweetEditorStore();
  const {
    username,
    name,
    isPreviewMode,
    theme,
    imagePreview,
    setImagePreview,
  } = tweetData;
  const currThemeConfig = themeMap[theme || Theme.Light] || {};

  const [ref, onClickButton, { isSuccess }] = useToPng<HTMLDivElement>({
    onSuccess: setImagePreview,
  });

  const truncatedText = username && username.length > 15 ? username.slice(0, 60) + "..." : username;

  useEffect(() => {
    setImagePreview(undefined);

    if (isPreviewMode) {
      onClickButton();
    }
  }, [isPreviewMode, theme]);

  useEffect(() => {
    if (imagePreview === "data:,") {
      setImagePreview(undefined);
      onClickButton();
    }
  }, [imagePreview]);
  return (
    <Box
      opacity={1}
      display={"flex"}
      justifyContent={"center"}
      flexDir={"row"}
      w="full"
      position={"relative"}
      alignItems={"center"}
    >
      {!!isSuccess && (
        <Image
          w={["full", "full", "550px"]}
          maxW="100vw"
          h="fit-content"
          shadow={["none", "none", "lg"]}
          rounded={"lg"}
          mx="auto"
          src={imagePreview}
        />
      )}

      <Box h="0" overflow={"hidden"} pos={"absolute"}>
        <Box ref={ref}>
          <Box
            shadow={["none", "none", "lg"]}
            rounded={"lg"}
            py={4}
            px={4}
            bg={currThemeConfig.bg}
            color={currThemeConfig.color}
            w={"550px"}
            border={[0, 0, "1px solid"]}
            borderColor={[
              "transparent",
              "transparent",
              currThemeConfig.borderColor,
            ]}
          >
            {/* Tweet header */}
            <Flex mb="2">
              <Avatar
                src={tweetData.profilePicture}
                objectFit={"cover"}
                h={12}
                w={12}
                mr="4"
              />
              <Box fontSize={"15px"} width={"full"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Text fontWeight={"bold"}>{name}</Text>
                  <SelectedVerificationBadge h="18px" w="18px"  color="red"/>
                </Flex>
                <Text color={currThemeConfig.subtextColor} fontSize={"xs"} my={0} py={0}>
                 {truncatedText}
                </Text> 
                <TimeAgoWithIcon date={tweetData.date}  subtextColor={currThemeConfig.subtextColor} />
              </Box>
             
            </Flex>
            {/* Tweet body */}
            <TweetTextRender />

            {!!tweetData.imageUrl?.length && (
              <Image mt="4" rounded={"md"} src={tweetData.imageUrl} />
            )}

            <Flex
              display={"flex"}
              fontSize={"md"}
              mt="4"
              alignItems={"center"}
              color={currThemeConfig.subtextColor}
            >
         
              <Text mx="1">{"·"}</Text>
              <Box fontSize={"sm"} display={"inline-flex"}>
                <Text mx="1" fontWeight={"bold"} color={currThemeConfig.color}>
                  {formatNumber(tweetData.viewCount)}
                </Text>{" "}
                <Text>Views</Text>
              </Box>
            </Flex>

            <Box h={"1px"} bg={currThemeConfig.borderColor} my="2" />

            <Wrap gap="4" justifyContent={"flex-start"} mt="2" fontSize={"sm"}>
              <Box display={"inline-flex"} color={currThemeConfig.subtextColor}>
                <Text mr="1" fontWeight={"bold"} color={currThemeConfig.color}>
                  {formatNumber(tweetData.retweetsCount)}
                </Text>
                Retweets
              </Box>
              <Box display={"inline-flex"} color={currThemeConfig.subtextColor}>
                <Text mr="1" fontWeight={"bold"} color={currThemeConfig.color}>
                  {formatNumber(tweetData.quoteTweetsCount)}
                </Text>
                Quotes
              </Box>
              <Box display={"inline-flex"} color={currThemeConfig.subtextColor}>
                <Text mr="1" fontWeight={"bold"} color={currThemeConfig.color}>
                  {formatNumber(tweetData.likesCount)}
                </Text>
                Likes
              </Box>
              <Box display={"inline-flex"} color={currThemeConfig.subtextColor}>
                <Text mr="1" fontWeight={"bold"} color={currThemeConfig.color}>
                  {formatNumber(tweetData.bookmarkCount)}
                </Text>
                Bookmarks
              </Box>
            </Wrap>

            <Box h={"1px"} bg={currThemeConfig.borderColor} mt="2" />

            <Wrap
              gap="2"
              justifyContent={"space-between"}
              mt="3"
              alignItems={"center"}
            >
              <Flex flex={1} alignContent={"center"}>
                <Icon
                  h="18px"
                  w="18px"
                  color={currThemeConfig.subtextColor}
                  as={CommentIcon}
                />
              </Flex>
              <Flex flex={1} alignContent={"center"}>
                <Icon
                  h="18px"
                  w="18px"
                  color={currThemeConfig.subtextColor}
                  as={RetweetIcon}
                />
              </Flex>
              <Flex flex={1} alignContent={"center"}>
                <Icon
                  h="18px"
                  w="18px"
                  color={currThemeConfig.subtextColor}
                  as={LikeIcon}
                />
              </Flex>
              <Flex flex={1} alignContent={"center"}>
                <Icon
                  h="18px"
                  w="18px"
                  color={currThemeConfig.subtextColor}
                  as={BookmarkIcon}
                />
              </Flex>
              <Flex flex={1} alignContent={"center"}>
                <Icon
                  h="18px"
                  w="18px"
                  color={currThemeConfig.subtextColor}
                  as={ShareIcon}
                />
              </Flex>
            </Wrap>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
