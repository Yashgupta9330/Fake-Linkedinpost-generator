import { Collapse, Text, useEditableControls } from "@chakra-ui/react";

interface HelpTextForEditableProps {
  text?: string;
}
export const HelpTextForEditable: React.FC<HelpTextForEditableProps> = ({
  text,
}) => {
  const { isEditing } = useEditableControls();
  return (
    <Collapse in={!!isEditing} animateOpacity>
      <Text color={"gray.500"} fontWeight={"normal"} mb={1} fontSize={"xs"}>
        {text}
      </Text>
    </Collapse>
  );
};
