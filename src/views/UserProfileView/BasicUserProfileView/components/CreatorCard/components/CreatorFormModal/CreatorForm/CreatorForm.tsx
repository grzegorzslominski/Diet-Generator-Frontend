import { mainTheme } from "../../../../../../../../themes/mainTheme";

import UploadBox from "../../../../../../../../components/UI/UploadBox/UploadBox";
import Label from "../../../../../../../../components/UI/Label/Label";
import Input from "../../../../../../../../components/UI/Input/Input";

import {
    ExpandedUserForm,
    ExpandedUserFormValidation,
} from "../../../../../../../../models/User/ExpandedUserForm";

import * as S from "./CreatorForm.style";
import TextArea from "../../../../../../../../components/UI/TextArea/TextArea";

type CreatorFormProps = {
    expandedUser: ExpandedUserForm;
    expandedUserValidation: ExpandedUserFormValidation;
    onChange: (property: string, value: any) => void;
};

const CreatorForm = ({ expandedUser, expandedUserValidation, onChange }: CreatorFormProps) => {
    return (
        <S.Container>
            <Input
                placeholder='fitness couch'
                size='small'
                value={expandedUser.title}
                label='Range of activity'
                error={expandedUserValidation.about}
                onChange={(value) => onChange("title", value)}
                width='250px'
            />
            <TextArea
                label='About you'
                value={expandedUser.about}
                error={expandedUserValidation.about}
                onChange={(value) => onChange("about", value)}
                width='100%'
            />
            <S.SocialsContainer>
                <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.inputText}>
                    Your socials media
                </Label>
                <S.Socials>
                    <>
                        {Object.keys(expandedUser.socials).map((key: string) => {
                            return (
                                <Input
                                    placeholder='example@email.com'
                                    size='small'
                                    key={key}
                                    value={expandedUser.socials[key]}
                                    label={key}
                                    onChange={(value) => onChange("key", value)}
                                />
                            );
                        })}
                    </>
                </S.Socials>
                {expandedUserValidation.socials && (
                    <Label fontSize='12px' color={mainTheme.colors.error}>
                        {expandedUserValidation.socials}
                    </Label>
                )}
            </S.SocialsContainer>
            <S.UploadBoxWrapper>
                <UploadBox
                    url={expandedUser.backgroundIMG?.url}
                    type={expandedUser.backgroundIMG?.type}
                    onChange={(file) => onChange("backgroundIMG", file)}
                    onRemove={() => onChange("backgroundIMG", null)}
                    error={expandedUserValidation.backgroundIMG}
                />
            </S.UploadBoxWrapper>
        </S.Container>
    );
};

export default CreatorForm;
