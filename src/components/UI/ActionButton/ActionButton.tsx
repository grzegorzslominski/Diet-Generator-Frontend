import * as S from "./ActionButton.style";

import EditIcon from "../../../assets/icons/actions/edit.png";
import Label from "../Label/Label";
import { mainTheme } from "../../../themes/mainTheme";

type ActionItem = {
    [key: string]: {
        component: React.ReactElement;
        size: {
            normal: string;
            small: string;
        };
    };
};

const ACTIONS_ITEMS: ActionItem = {
    remove: {
        component: (
            <Label
                color={mainTheme.colors.error}
                fontSize='18px'
                lineHeight='18px'
                fontWeight='700'
            >
                x
            </Label>
        ),
        size: {
            normal: "7.5px",
            small: "5px",
        },
    },
    edit: {
        component: <img src={EditIcon} alt='EditIcon' />,
        size: {
            normal: "12.5px",
            small: "10px",
        },
    },
    info: {
        component: (
            <Label
                color={mainTheme.colors.mainBlack}
                fontSize='12px'
                fontWeight='700'
                lineHeight='12px'
            >
                ?
            </Label>
        ),
        size: {
            normal: "12.5px",
            small: "5px",
        },
    },
    add: {
        component: (
            <Label
                color={mainTheme.colors.mainBlack}
                fontSize='20px'
                fontWeight='700'
                lineHeight='20px'
            >
                +
            </Label>
        ),
        size: {
            normal: "12.5px",
            small: "5px",
        },
    },
    confirm: {
        component: <S.Checkmark />,
        size: {
            normal: "12.5px",
            small: "5px",
        },
    },
};

type ActionButtonProps = {
    onClick: (e?: any) => void;
    type: "edit" | "remove" | "info" | "add" | "confirm";
    size?: "small" | "normal";
};

const ActionButton = ({ onClick, type, size = "normal" }: ActionButtonProps) => {
    return (
        <S.Container
            onClick={onClick}
            size={ACTIONS_ITEMS[type].size[size]}
            sizeType={size}
            type={type}
        >
            {ACTIONS_ITEMS[type].component}
        </S.Container>
    );
};

export default ActionButton;
