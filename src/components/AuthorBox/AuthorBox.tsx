import { useNavigate } from "react-router-dom";

import { NAVIGATION } from "../../navigation/paths";
import noUser from "../../assets/empty-user.jpg";
import { mainTheme } from "../../themes/mainTheme";

import Label from "../UI/Label/Label";

import { PublicUser } from "../../models/User/ExpandedUser";

import * as S from "./AuthorBox.style";

type AuthorBoxProps = {
    author: PublicUser;
    authorImage?: string | null;
    size?: "normal" | "small";
};

const AuthorBox = ({ author, authorImage, size = "normal" }: AuthorBoxProps) => {
    const navigate = useNavigate();

    return (
        <S.Container onClick={() => navigate(`${NAVIGATION.profile}/${author.id}`)} size={size}>
            {<img src={authorImage ? authorImage : noUser} alt='User picture' />}

            <Label
                fontSize={size === "normal" ? "14px" : "12px"}
                textAlign='center'
                fontWeight='500'
                color={mainTheme.colors.mainBlack}
            >
                {author && author.firstName && author.lastName
                    ? `${author?.firstName} ${author?.lastName}`
                    : `user${author?.id}`}
            </Label>
        </S.Container>
    );
};

export default AuthorBox;
