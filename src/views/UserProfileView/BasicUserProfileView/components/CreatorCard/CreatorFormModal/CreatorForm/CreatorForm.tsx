import { mainTheme } from "../../../../../../../themes/mainTheme";

import { INIT_SOCIAL_LINKS } from "../../../../../../../models/SocialsLinks/SocialsLinks";

import UploadBox from "../../../../../../../components/UI/UploadBox/UploadBox";
import TextArea from "../../../../../../../components/UI/TextArea/TextArea";
import Label from "../../../../../../../components/UI/Label/Label";
import Input from "../../../../../../../components/UI/Input/Input";

import {
    UserExtrasFormValidation,
    UserExtrasForm,
} from "../../../../../../../models/User/ExpandedUserForm";

import * as S from "./CreatorForm.style";

type CreatorFormProps = {
    userExtras: UserExtrasForm;
    userExtrasValidation: UserExtrasFormValidation;
    onChange: (property: string, value: any, socialKey?: string) => void;
    onBackgroundChange: (file: any) => void;
};

const CreatorForm = ({
    userExtras,
    userExtrasValidation,
    onChange,
    onBackgroundChange,
}: CreatorFormProps) => {
    return (
        <S.Container>
            <Input
                placeholder='fitness couch'
                size='small'
                value={userExtras.profession}
                label='Profession'
                error={userExtrasValidation.profession}
                onChange={(e) => onChange("profession", e.target.value)}
                width='270px'
            />
            <TextArea
                label='About you'
                value={userExtras.about_me}
                error={userExtrasValidation.about_me}
                onChange={(e) => onChange("about_me", e.target.value)}
                width='100%'
                limit={300}
                size='small'
            />
            <S.SocialsContainer>
                <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.inputText}>
                    Your socials media
                </Label>
                <S.Socials>
                    <>
                        {Object.keys(INIT_SOCIAL_LINKS).map((key: string) => {
                            return (
                                <Input
                                    placeholder='example@email.com'
                                    size='small'
                                    key={key}
                                    value={userExtras?.socials[key] ? userExtras?.socials[key] : ""}
                                    label={key}
                                    onChange={(e) => onChange("socials", e.target.value, key)}
                                    type='email'
                                />
                            );
                        })}
                    </>
                    <S.ErrorContainer>
                        <Label fontSize='12px' color={mainTheme.colors.error}>
                            {userExtrasValidation.socials}
                        </Label>
                    </S.ErrorContainer>
                </S.Socials>
            </S.SocialsContainer>
            <S.UploadBoxWrapper>
                <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.inputText}>
                    Profile background image
                </Label>
                <UploadBox
                    url={userExtras.background_image?.url}
                    type='image/png'
                    onChange={(file) => onBackgroundChange(file)}
                    onRemove={() => onChange("background_image", null)}
                    error={userExtrasValidation.background_image}
                />
            </S.UploadBoxWrapper>
        </S.Container>
    );
};

export default CreatorForm;
