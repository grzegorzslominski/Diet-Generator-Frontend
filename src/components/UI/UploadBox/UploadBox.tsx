import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { mainTheme } from "../../../themes/mainTheme";

import GradientLabel from "../GradientLabel/GradientLabel";
import Label from "../Label/Label";

import * as S from "./UploadBox.style";

type UploadBoxProps = {
    type?: string;
    url?: string;
    children?: any;
    error?: string;
    displayError?: boolean;
    accept?: any;
    disable?: boolean;
    onChange: (files: any) => void;
    onRemove: () => void;
};

const UploadBox = ({
    children,
    accept,
    type,
    error,
    url,
    displayError = true,
    disable = true,
    onChange,
    onRemove,
}: UploadBoxProps) => {
    const onDrop = useCallback(
        (files: any) => {
            onChange(files);
        },
        [onChange],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        noClick: url ? true : false,
        accept: accept,
    });

    return (
        <S.Container>
            <S.ImageContainer url={url} {...getRootProps()} error={error}>
                {!url && <input {...getInputProps()} />}
                {!url && (
                    <>
                        {children ? (
                            children
                        ) : (
                            <>
                                {!isDragActive && (
                                    <Label fontSize='52px' fontWeight='500'>
                                        +
                                    </Label>
                                )}
                            </>
                        )}
                    </>
                )}
                {!url && isDragActive && (
                    <GradientLabel style={{ display: "flex" }}>
                        <Label
                            fontSize='10px'
                            lineHeight='14px'
                            fontWeight='500'
                            textAlign='center'
                        >
                            drop the file here
                        </Label>
                    </GradientLabel>
                )}
                {url && !disable && (
                    <S.Close onClick={onRemove}>
                        <Label fontSize='26px' color={mainTheme.colors.error}>
                            +
                        </Label>
                    </S.Close>
                )}
            </S.ImageContainer>
            {displayError && error && (
                <S.ErrorContainer>
                    <Label fontSize='12px' lineHeight='18px' color='#FF0000'>
                        {error}
                    </Label>
                </S.ErrorContainer>
            )}
        </S.Container>
    );
};

export default UploadBox;
