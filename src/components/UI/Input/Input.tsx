import { forwardRef, useState } from "react";
import moment, { Moment } from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import Label from "../Label/Label";
import { mainTheme } from "../../../themes/mainTheme";

import { InputProps } from "./Input.type";

import * as S from "./Input.style";

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type,
            placeholder,
            value,
            icon,
            onBlur,
            onChange,
            disabled = false,
            labelIndent = false,
            maxLength,
            label,
            required = false,
            disabledDate,
            allDatesRange,
            onKeyDown,
            min,
            max,
            regex,
            regexMessage,
            error,
            clearError,
            id = "",
            width = "100%",
            size = "normal",
            showErrorMessage = true,
        },
        ref,
    ) => {
        const [datePickerFocus, setDatePickerFocus] = useState(false);
        const [internalValidationError, setInternalValidationError] = useState("");

        const validationInputHandler = (e: any) => {
            if (type === "number") {
                if (min !== undefined) {
                    if (+e.target.value < min) return;
                }

                if (max) {
                    if (+e.target.value > max) return;
                }
            }

            if (error && clearError) {
                clearError();
            }

            if (internalValidationError) {
                setInternalValidationError("");
            }

            if (onChange) onChange(e);
        };

        const validationBlurHandler = (e: any) => {
            if (internalValidationError) setInternalValidationError("");

            if (required && !value) {
                setInternalValidationError("This field is required.");
            }

            if (regex && value) {
                if (!regex.test(value)) {
                    setInternalValidationError(
                        regexMessage ? regexMessage : "Provided URL is not valid.",
                    );
                }
            }

            if (onBlur) onBlur(e);
        };

        return (
            <S.Container
                type={type}
                width={width}
                labelIndent={labelIndent}
                label={label}
                disabled={disabled}
                icon={Boolean(icon)}
                size={size}
            >
                {label && (
                    <Label
                        fontFamily='Lato'
                        fontWeight='600'
                        fontSize={size === "normal" ? "15px" : "11px"}
                        color={mainTheme.colors.inputText}
                    >
                        {label}
                    </Label>
                )}

                <S.InputContainer
                    width={width}
                    icon={Boolean(icon)}
                    size={size}
                    type={type}
                    showErrorMessage={Boolean(showErrorMessage)}
                    error={error}
                >
                    {icon ? icon : null}
                    {type !== "date" && (
                        <S.StyledInput
                            ref={ref}
                            disabled={disabled}
                            label={label}
                            type={type}
                            maxLength={maxLength}
                            min={min}
                            max={max}
                            onKeyDown={onKeyDown}
                            placeholder={placeholder}
                            value={value ? value : ""}
                            onChange={validationInputHandler}
                            onBlur={validationBlurHandler}
                            error={internalValidationError || error}
                        />
                    )}
                    {type === "date" && onChange && (
                        <SingleDatePicker
                            placeholder=''
                            displayFormat='DD/MM/YYYY'
                            isOutsideRange={(date: Moment) => {
                                return allDatesRange
                                    ? false
                                    : disabledDate
                                    ? moment(date).diff(disabledDate) > 0 || moment().diff(date) < 0
                                    : moment().diff(date) < 0 &&
                                      moment().format("DD/MM/YYYY").toString() !==
                                          moment(date).format("DD/MM/YYYY").toString();
                            }}
                            disabled={disabled}
                            date={value ? moment(value) : null}
                            onDateChange={(date: moment.Moment | null) => onChange(date)}
                            onFocusChange={() => setDatePickerFocus((prev) => !prev)}
                            id={id}
                            focused={datePickerFocus}
                        />
                    )}
                </S.InputContainer>

                {(internalValidationError || error) && showErrorMessage && (
                    <S.ErrorContainer labelIndent={labelIndent}>
                        <Label fontSize={size === "normal" ? "15px" : "11px"} color='#FF0000'>
                            {internalValidationError || error}
                        </Label>
                    </S.ErrorContainer>
                )}
            </S.Container>
        );
    },
);

export default Input;
