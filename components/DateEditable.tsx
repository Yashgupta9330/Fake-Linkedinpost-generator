import {
  Box,
  Editable,
  EditableInput,
  Text,
  useEditableControls,
} from "@chakra-ui/react";
import React from "react";
import { useTweetEditorStore } from "@/store/useTweetEditorStore";
import TimeAgoWithIcon from "./DateViewer";

const MetricInputforEditable: React.FC = () => {
  const { date } = useTweetEditorStore();

  const { isEditing, getEditButtonProps } = useEditableControls();

  return (
    <Box display={"inline-flex"} gap="1" fontSize={"sm"}>
      <EditableInput
        py="0"
        type="datetime-local"
        rounded={"md"}
        display={"inline"}
        _focus={{ boxShadow: "none", outline: "none" }}
      />

      <Box {...getEditButtonProps()} display={"inline-flex"}>
        {!isEditing && (
           <TimeAgoWithIcon date={date}  subtextColor="gray.500" />
        )}
      </Box>
    </Box>
  );
};

interface DateEditableProps {}
const DateEditable: React.FC<DateEditableProps> = ({}) => {
  const { date, setDate } = useTweetEditorStore();

  const formattedDateForInput = new Date(date).toISOString().slice(0, 16);

  return (
    <Editable
      defaultValue={formattedDateForInput}
      display={"block"}
      onChange={(e) => setDate(new Date(e).toISOString())}
      rounded={"md"}
      position={"relative"}
      isPreviewFocusable={true}
      selectAllOnFocus={true}
      cursor={"pointer"}
      px="1"
      _focusWithin={{ bg: "gray.100" }}
      _hover={{ bg: "gray.100" }}
    >
      <MetricInputforEditable />
    </Editable>
  );
};

export default DateEditable;
