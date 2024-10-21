import { ReactNode } from "react";

type DropdownMenuButtonType = {
    icon: ReactNode;
    title: string;
    onPress: () => void;
}

export default DropdownMenuButtonType;