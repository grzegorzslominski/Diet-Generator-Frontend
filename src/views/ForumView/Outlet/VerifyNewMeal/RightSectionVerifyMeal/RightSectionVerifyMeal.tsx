
import { mainTheme } from "../../../../../themes/mainTheme";


import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";

import * as S from "./RightSectionVerifyMeal.style";
import { useNavigate } from "react-router-dom";
import { NAVIGATION } from "../../../../../navigation/paths";


const RightSectionVerifyMeal = () => {
  const navigate = useNavigate()
  const handleNavigate = () => navigate(NAVIGATION.newMeal)
  return (
    <S.Wrapper>
      <S.Container2>
        <Label color={mainTheme.colors.mainBlack}>Add new post</Label>
        <Button
          styleType='primaryFull'
          width='8rem'
          isLoading={false}
          size='small'
          borderRadius='10px'
          fontSize='1rem'
          onClick={handleNavigate}
          background={mainTheme.gradients.buttonGradient}
        >
          <Label textAlign='center' color='white'>
            Add new post
          </Label>
        </Button>
      </S.Container2>
    </S.Wrapper>
  );
}

export default RightSectionVerifyMeal;
