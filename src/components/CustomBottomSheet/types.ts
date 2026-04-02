import { ReactNode } from "react";

export type TCustomBottomSheetProps = {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
};