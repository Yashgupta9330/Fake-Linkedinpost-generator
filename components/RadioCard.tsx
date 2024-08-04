import { useRadio, Box, RadioProps, Button } from "@chakra-ui/react";

// 1. Create a component that consumes the `useRadio` hook
interface RadioCardProps extends RadioProps {
  children?: React.ReactNode;
}
export const RadioCard: React.FC<RadioCardProps> = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        p="1"
        px="3"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "twitter.500",
          color: "white",
          borderColor: "twitter.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        {...props}
      >
        {props.children}
      </Box>
    </Box>
  );
};
