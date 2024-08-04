import BlueTickIcon from "@/icons/BlueTickIcon";
import GoldTickIcon from "@/icons/GoldTickIcon";
import {
  VerificationBadge,
  useTweetEditorStore,
} from "@/store/useTweetEditorStore";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import SelectedVerificationBadge from "./SelectedVerificationBadge";
import ThreeDotsHorizontalSimple from "@/icons/ThreeDotsIcon";

export const VerificationBadgeInput = () => {
  const { verificationStatus, setVerificationStatus } = useTweetEditorStore();
  return (
    <Menu isLazy autoSelect={false}>
      <MenuButton
        size="sm"
        fontWeight={"bold"}
        as={IconButton}
        border="3px"
        borderColor="gray.300"
        color="blue.500"
        icon={<SelectedVerificationBadge w="5" h="5" />}
      />
      <MenuList>
        <MenuItem
          onClick={() => setVerificationStatus(VerificationBadge.NoTick)}
          bg={verificationStatus === VerificationBadge.NoTick ? "gray.200" : ""}
          id="no-tick"
        >
         <ThreeDotsHorizontalSimple/>
        </MenuItem>
        <MenuItem
          onClick={() => setVerificationStatus(VerificationBadge.BlueTick)}
          bg={
            verificationStatus === VerificationBadge.BlueTick ? "gray.200" : ""
          }
          id="blue-tick"
        //  icon={<Icon color={"blue.400"} as={BlueTickIcon} w="5" h="5" />}
        >
          Connect
        </MenuItem>
        <MenuItem
          onClick={() => setVerificationStatus(VerificationBadge.GoldTick)}
          bg={
            verificationStatus === VerificationBadge.GoldTick ? "gray.200" : ""
          }
          id="gold-tick"
        >
          Follow
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
