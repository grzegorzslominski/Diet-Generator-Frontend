import styled from "styled-components";
import { mainTheme } from "../../../themes/mainTheme";
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
    white-space: normal;
    padding: 4px 0;

    z-index: 1;
    max-width: 100%;
    position: relative;
    padding-left: 4px;
    gap: ${({ editable }) => (editable ? "16px" : 0)};
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: ${mainTheme.colors.grey};
    background-color: ${mainTheme.colors.primaryColor};
    border-bottom: 2px solid white;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        color: white;
        background: ${mainTheme.colors.secondaryColor};
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