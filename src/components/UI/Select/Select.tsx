import React, { useEffect, useRef, useState } from "react";
import { withTheme } from "styled-components";
import ActionButton from "../ActionButton/ActionButton";
import Label from "../Label/Label";
import ScrollBox from "../ScrollBox/ScrollBox";

import * as S from "./Select.style";

type SelectProps = {
    theme: any;
    width?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    labelIndent?: boolean;
    value: any;
    multiSelect?: boolean;
    onChange: any;
    border?: string;
    borderRadius?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "auto";
    children: any;
    optionsMaxHeight?: number;
    textOverflow?: string;
    searchable?: boolean;
    background?: string;
    optionsBackground?: string;
    editable?: boolean;
    maxAddOptionLength?: number;
    searchCallback?: (value: string) => void;
    addSelectOption?: (value: string) => void;
    position?: "bottom" | "top";
    customSearching?: (value: string, element: any) => boolean;
};

const Select = ({
    width = "100%",
    labelIndent = false,
    label,
    placeholder,
    error,
    value,
    onChange,
    multiSelect = false,
    optionsMaxHeight = 220,
    textOverflow = "",
    border = "",
    maxAddOptionLength,
    borderRadius = "6px",
    background = "#161819",
    optionsBackground = "#161819",
    size = "medium",
    disabled,
    searchCallback,
    addSelectOption,
    searchable,
    editable,
    position,
    children,
    customSearching,
}: SelectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const valueContainerRef = useRef<HTMLDivElement>(null);

    const [searchValue, setSearchValue] = useState<string>("");
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [openSelect, setOpenSelect] = useState(false);
    const [optionsPosition, setOptionsPosition] = useState<"bottom" | "top">(
        position ? position : "bottom",
    );
    const [remainingMultiselectCount, setRemainingMultiselectCount] = useState(0);

    useEffect(() => {
        window.addEventListener("mousedown", mouseDownHandler);

        return () => window.removeEventListener("mouseDown", mouseDownHandler);
    }, []);

    useEffect(() => {
        if (ref.current && !position) optionsPositionHandler();
    }, [ref, document.body.scrollHeight]);

    useEffect(() => {
        if (multiSelect) {
            calculateCountPlaceholder();
        }
    }, [value]);

    useEffect(() => {
        if (searchCallback) {
            searchCallback(searchValue);
        }
    }, [searchValue]);

    useEffect(() => {
        if (searchInputRef.current && isFocus) searchInputRef.current.focus();

        if (!isFocus && multiSelect) calculateCountPlaceholder();

        if (isFocus && searchable && value && searchCallback) {
            setSearchValue(value);
        }
    }, [isFocus]);

    const mouseDownHandler = (e: any) => {
        if (!e?.composedPath()?.includes(ref.current)) {
            onBlurHandler();
        }
    };

    const optionsPositionHandler = () => {
        let pageBottomPadding = 40;
        if (ref.current) {
            let selectTopPosition = ref.current?.getBoundingClientRect().top;

            if (
                selectTopPosition + optionsMaxHeight >
                document.body.scrollHeight - pageBottomPadding
            ) {
                setOptionsPosition("top");
            } else {
                setOptionsPosition("bottom");
            }
        }
    };

    const onChangePrehandler = (selectedValue: any) => {
        if (selectedValue) {
            if (!multiSelect) {
                if (searchable) {
                    onBlurHandler();
                } else {
                    setOpenSelect(false);
                }

                onChange(selectedValue);
            } else {
                let currentValues = JSON.parse(JSON.stringify(value));
                if (Array.isArray(currentValues) && currentValues.includes(selectedValue)) {
                    currentValues = currentValues.filter((x: any) => x !== selectedValue);
                } else if (Array.isArray(currentValues)) {
                    currentValues.push(selectedValue);
                }

                onChange(currentValues);
            }
        }
    };

    const calculateCountPlaceholder = () => {
        let visibleWidth = valueContainerRef.current?.scrollWidth;
        let valuesLength = value.join().length;

        if (visibleWidth) {
            let remainingWidth = visibleWidth - 24 - valuesLength * 10;

            if (remainingWidth < 0 && visibleWidth) {
                let valuesSubstring = value.join().substr(0, Math.round(visibleWidth / 10));
                let countVisibleItems = valuesSubstring.split(",").length - 1;
                setRemainingMultiselectCount(countVisibleItems);
            } else {
                setRemainingMultiselectCount(value.length);
            }
        }
    };

    const renderMultiSelectValue = () => {
        let multiSelectValue = value.map((selectValue: any, i: number) => {
            let foundValueChildren = children.find(
                (child: any) => child.props.value === selectValue,
            );
            if (foundValueChildren) {
                return i > remainingMultiselectCount - 1
                    ? ""
                    : value.length === 1
                    ? foundValueChildren.props.children
                    : i < remainingMultiselectCount - 1
                    ? foundValueChildren.props.children + ", "
                    : foundValueChildren.props.children;
            }
        });

        let filteredMultiselectValue = multiSelectValue.filter((x: any) => x);
        if (filteredMultiselectValue.length !== value.length) {
            filteredMultiselectValue.push(" +" + (value.length - filteredMultiselectValue.length));
        }

        return filteredMultiselectValue;
    };

    const onBlurHandler = () => {
        ref?.current?.blur();

        setOpenSelect(false);

        if (searchable) {
            setIsFocus(false);
            setSearchValue("");
        }
    };

    const onFocusHandler = () => {
        if (searchable) {
            setIsFocus(true);
            setOpenSelect(true);
        }
    };

    const handleShowAddOption = (searchValue: string): boolean => {
        const matchingValues = React.Children.map<React.ReactNode, React.ReactNode>(
            children,
            (child) => {
                if (
                    React.isValidElement(child) &&
                    child.props.children.toLowerCase() === searchValue.toLowerCase()
                ) {
                    return true;
                }
            },
        );
        return !matchingValues?.length;
    };

    const addSelectOptionPrehandler = (value: string) => {
        if (addSelectOption) addSelectOption(value);
        onChangePrehandler(value);
    };

    return (
        <S.Container width={width} labelIndent={labelIndent}>
            {label && (
                <>
                    <Label error={error} fontWeight='700' fontSize='14px'>
                        {label}
                    </Label>
                </>
            )}
            <S.InnerContainer ref={ref} tabIndex={0} onFocus={onFocusHandler}>
                <S.CustomSelect
                    size={size}
                    border={border}
                    borderRadius={borderRadius}
                    disabled={disabled}
                    background={background}
                    label={label}
                    error={error}
                    onClick={() =>
                        !disabled && !multiSelect && !searchable
                            ? setOpenSelect((prev) => !prev)
                            : null
                    }
                >
                    <S.SelectTrigger>
                        {isFocus && searchable ? (
                            <S.SearchInput
                                background={background}
                                maxLength={maxAddOptionLength}
                                ref={searchInputRef}
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        ) : value && !multiSelect ? (
                            React.Children.count(children) > 1 ? (
                                children.map((child: any) => {
                                    if (child.props.value === value) {
                                        return (
                                            <S.ValueContainer
                                                textOverflow={textOverflow}
                                                ref={valueContainerRef}
                                            >
                                                {child.props.children}
                                            </S.ValueContainer>
                                        );
                                    }
                                })
                            ) : (
                                <>
                                    {children?.props?.children?.props?.value === value ? (
                                        <S.ValueContainer
                                            textOverflow={textOverflow}
                                            ref={valueContainerRef}
                                        >
                                            {children.props.children}
                                        </S.ValueContainer>
                                    ) : Array.isArray(children) &&
                                      children[0]?.props.value === value ? (
                                        <S.ValueContainer
                                            textOverflow={textOverflow}
                                            ref={valueContainerRef}
                                        >
                                            {children[0]?.props.children}
                                        </S.ValueContainer>
                                    ) : searchCallback ? (
                                        <S.ValueContainer
                                            textOverflow={textOverflow}
                                            ref={valueContainerRef}
                                        >
                                            {value}
                                        </S.ValueContainer>
                                    ) : (
                                        <></>
                                    )}
                                </>
                            )
                        ) : value && multiSelect ? (
                            <S.ValueContainer textOverflow={textOverflow} ref={valueContainerRef}>
                                {renderMultiSelectValue()}
                            </S.ValueContainer>
                        ) : <S.ValueContainer textOverflow={textOverflow} ref={valueContainerRef}>
                              <Label fontSize='14px' color='#747474'>
                                  {placeholder}
                              </Label>
                          </S.ValueContainer> ? (
                            <S.ValueContainer textOverflow={textOverflow} ref={valueContainerRef}>
                                <Label fontSize='14px' color='#747474'>
                                    {placeholder}
                                </Label>
                            </S.ValueContainer>
                        ) : null}
                        <S.Arrow />
                    </S.SelectTrigger>
                </S.CustomSelect>
                <S.CustomOptions
                    show={openSelect}
                    background={optionsBackground}
                    optionsPosition={optionsPosition}
                    maxHeight={optionsMaxHeight}
                >
                    <ScrollBox
                        height={optionsMaxHeight}
                        scrollDistance={14}
                        scrollPosition='outside'
                    >
                        {React.Children.count(children) > 0
                            ? React.Children.map<React.ReactNode, React.ReactNode>(
                                  children,
                                  (child) => {
                                      if (
                                          customSearching &&
                                          React.isValidElement(child) &&
                                          customSearching(searchValue, child)
                                      ) {
                                          return React.cloneElement(child, {
                                              onChange: onChangePrehandler,
                                              selected:
                                                  multiSelect && value.includes(child.props.value),
                                          });
                                      } else if (
                                          React.isValidElement(child) &&
                                          !customSearching &&
                                          (!searchable ||
                                              (searchable &&
                                                  child.props.children
                                                      .toLowerCase()
                                                      .includes(searchValue.trim().toLowerCase())))
                                      ) {
                                          return React.cloneElement(child, {
                                              onChange: onChangePrehandler,
                                              selected:
                                                  multiSelect && value.includes(child.props.value),
                                          });
                                      }
                                  },
                              )
                            : children}
                        {searchValue &&
                        editable &&
                        addSelectOption &&
                        handleShowAddOption(searchValue) ? (
                            <S.AddOption onClick={() => addSelectOptionPrehandler(searchValue)}>
                                <ActionButton type='add' onClick={() => null} />
                                <Label fontSize='14px' color='#747474'>
                                    {searchValue}
                                </Label>
                            </S.AddOption>
                        ) : null}
                    </ScrollBox>
                </S.CustomOptions>
            </S.InnerContainer>
            {error && (
                <S.ErrorContainer>
                    <Label fontSize='12px' color='#FF0000'>
                        {error}
                    </Label>
                </S.ErrorContainer>
            )}
        </S.Container>
    );
};

export default withTheme(Select);
