import styled from "styled-components";
import ActionButton from "../ActionButton/ActionButton";

type CustomOptionProps = {
    selected?: boolean;
    size?: "small" | "medium" | "auto";
    editable?: boolean;
};

const CustomOption = styled.span<CustomOptionProps>`
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0 12px;
    min-height: 48px;
    white-space: normal;
    padding: 12px 0;
    transition: all 0.5s;
    z-index: 1;
    max-width: 100%;
    position: relative;
    padding-left: ${({ editable, selected }) => (selected ? "37px" : editable ? "12px" : "26px")};
    gap: ${({ editable }) => (editable ? "16px" : 0)};

    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #747474;
    background: ${({ selected }) => (selected ? "#1b1d1f" : "inherit")};

    &::after {
        display: ${({ selected }) => (selected ? "inline-block" : "none")};
        content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        left: 16px;
        transform: translate(-50%, -50%);
        border: solid #747474;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    &:hover {
        cursor: pointer;
        background: #1b1d1f;
    }
`;

type SelectOptionProps = {
    children: React.ReactElement | string;
    value: any;
    size?: "small" | "medium" | "auto";
    onChange?: any;
    selected?: boolean;
    editable?: boolean;
    removeSelectOption?: (value: any) => void;
};

const SelectOption = ({
    children,
    value,
    size,
    selected,
    onChange,
    editable,
    removeSelectOption,
}: SelectOptionProps) => {
    const removeSelectOptionPrehandler = (e: React.MouseEvent<HTMLElement>, value: any) => {
        e.stopPropagation();

        if (removeSelectOption) removeSelectOption(value);
    };

    return (
        <CustomOption
            selected={selected}
            onClick={() => onChange(value)}
            editable={editable}
            size={size}
        >
            {editable && removeSelectOption ? (
                <ActionButton
                    type='remove'
                    onClick={(e: any) => removeSelectOptionPrehandler(e, value)}
                />
            ) : null}
            {children}
        </CustomOption>
    );
};

export default SelectOption;
