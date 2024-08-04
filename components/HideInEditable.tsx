import { useEditableControls } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HideInEditableProps {
  while: "editing" | "notEditing";
  children?: ReactNode;
}
export const HideInEditable: React.FC<HideInEditableProps> = ({
  while: status,
  children,
}) => {
  const { isEditing } = useEditableControls();

  if (
    (status === "editing" && !isEditing) ||
    (status === "notEditing" && isEditing)
  ) {
    return <>{children}</>;
  } else {
    return <></>;
  }
};
