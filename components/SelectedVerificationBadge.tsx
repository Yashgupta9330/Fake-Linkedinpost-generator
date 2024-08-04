import BlueTickIcon from "@/icons/BlueTickIcon";
import GoldTickIcon from "@/icons/GoldTickIcon";
import ThreeDotsHorizontalSimple from "@/icons/ThreeDotsIcon";
import {
  VerificationBadge,
  useTweetEditorStore,
} from "@/store/useTweetEditorStore";
import { Icon, IconProps } from "@chakra-ui/react";

const SelectedVerificationBadge: React.FC<IconProps> = (props) => {
  const { verificationStatus } = useTweetEditorStore();

  return (
    <>
      {verificationStatus === VerificationBadge.BlueTick && (
        <Icon color={"purple.500"} fontWeight={"bold"} as={BlueTickIcon} {...props} />
      )}
      {verificationStatus === VerificationBadge.GoldTick && (
        <Icon color={"blue.400"} fontWeight={"bold"}  as={GoldTickIcon} {...props} />
      )}
       {verificationStatus === VerificationBadge.NoTick && (
        <Icon color={"blue.400"} fontWeight={"bold"}  as={ThreeDotsHorizontalSimple} {...props} />
      )}
    </>
  );
};

export default SelectedVerificationBadge;
