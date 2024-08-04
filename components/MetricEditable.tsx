import {
  Box,
  Editable,
  EditableInput,
  Text,
  useEditableControls,
} from "@chakra-ui/react";
import React from "react";
import { formatNumber } from "../utils/formatNumber";

const MetricInputforEditable: React.FC<
  Pick<MetricEditableProps, "value" | "label">
> = ({ value, label }) => {
  const { isEditing, getEditButtonProps } = useEditableControls();

  return (
    <Box display={"inline-flex"} gap="1">
      <EditableInput
        py="0"
        type="number"
        maxW={value.toString().length * 9 + "px"}
        min={0}
        fontWeight={"bold"}
        rounded={"md"}
        display={"inline"}
        _focus={{ boxShadow: "none", outline: "none" }}
      />

      <Box {...getEditButtonProps()} display={"inline-flex"} gap="1">
        {!isEditing && (
          <Text
            py="0"
            color="black"
            fontWeight={"bold"}
            _hover={{ bg: "gray.100" }}
            minH={"1.2rem"}
          >
            {formatNumber(value, 0)}
          </Text>
        )}
        <Text color="lightGray" pointerEvents={"none"}>
          {label}
        </Text>
      </Box>
    </Box>
  );
};

interface MetricEditableProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
}
const MetricEditable: React.FC<MetricEditableProps> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <Editable
      onChange={(e) => onChange(Number(e) || 0)}
      defaultValue={value.toString()}
      display={"block"}
      rounded={"md"}
      position={"relative"}
      isPreviewFocusable={true}
      selectAllOnFocus={true}
      cursor={"pointer"}
      px="1"
      _focusWithin={{ bg: "gray.100" }}
      _hover={{ bg: "gray.100" }}
    >
      <MetricInputforEditable value={value} label={label} />
    </Editable>
  );
};

export default MetricEditable;
