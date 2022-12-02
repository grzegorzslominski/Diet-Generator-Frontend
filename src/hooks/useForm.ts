import { ChangeEvent, FormEvent, useState } from "react";

interface Validation {
    required?: {
        value: boolean;
        message: string;
    };
    pattern?: {
        value: RegExp;
        message: string;
    };
    custom?: {
        isValid: (value: string) => boolean;
        message: string;
    };
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
    validations?: Validations<T>;
    initialValues?: Partial<T>;
    onSubmit?: () => void;
}) => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T);
    const [errors, setErrors] = useState<ErrorRecord<T>>({});

    const handleChange =
        <S extends unknown>(key: keyof T, sanitizeFn?: (value: string) => S) =>
        (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
            let value: string | boolean | S;

            if (typeof e !== "object") {
                value = e;
            } else {
                value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
                if (typeof !!value === "boolean" && e.target.type === "checkbox")
                    value = e.target.checked;
            }

            setData({
                ...data,
                [key]: value,
            });

            const validations = options?.validations;
            if (validations) {
                const newErrors: ErrorRecord<T> = { ...errors };

                newErrors[key] = "";
                setErrors(newErrors);
            }
        };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors: ErrorRecord<T> = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];
                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }

                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }

                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});

        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    return {
        data,
        handleChange,
        handleSubmit,
        errors,
    };
};
