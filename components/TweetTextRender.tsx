import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import { Text } from "@chakra-ui/react";

export const TweetTextRender = () => {
  const tweetText = useTweetEditorStore((state) => state.tweetText);

  // Split the tweet into lines
  const lines = tweetText.split("\n");

  // Map over the lines
  const highlightedLines = lines.map((line, lineIndex) => {
    // Split the line into words
    const words = line.split(" ");

    // Map over the words and check each one
    const highlightedWords = words.map((word, wordIndex) => {
      if (word.startsWith("@")) {
        // If it's a mention, return a highlighted version
        return (
          <Text as="span" key={wordIndex} color="blue">
            {word}
          </Text>
        );
      } else if (word.startsWith("#")) {
        // If it's a hashtag, return a highlighted version
        return (
          <Text as="span" key={wordIndex} color="purple">
            {word}
          </Text>
        );
      } else if (
        // If it's a URL, return a highlighted version
        word.startsWith("http://") ||
        word.startsWith("https://") ||
        word.startsWith("www.")
      ) {
        return (
          <Text as="span" key={wordIndex} color="green">
            {word}
          </Text>
        );
      } else {
        // If it's not a mention, hashtag or URL, return the word as-is
        return <Twemoji text={word} key={wordIndex} />;
      }
    });

    // Join the words back together with spaces in between
    const highlightedText = highlightedWords.reduce(
      (prevWord, currWord, currIndex) => {
        return (
          <>
            {prevWord}
            {currIndex === 0 ? "" : " "}
            {currWord}
          </>
        );
      }
    );

    // Return the line with a newline character unless it's the last line
    return (
      <span key={lineIndex}>
        {highlightedText}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    );
  });

  return (
    <Text fontSize={"17"} minW={"100%"}>
      {highlightedLines}
    </Text>
  );
};

const Twemoji: React.FC<{ text: string }> = (props) => {
  return (
    <Text display={"inline"} dangerouslySetInnerHTML={{ __html: props.text }} />
  );
};
