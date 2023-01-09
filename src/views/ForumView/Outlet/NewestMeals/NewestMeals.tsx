import PostsLists from "../../PostsList/PostsLists";
import RightSection from "../RightSection/RightSection";

import { Meals } from "./const/Meals";
import { Outlet } from "react-router-dom";

import * as S from "./NewestMeals.style";

const NewestMeals = () => {
    return (
        <S.Container>
            {/* <S.Posts>
              <PostsLists data={Meals} />
          </S.Posts>
          <RightSection data={Meals}/>
          <Outlet/> */}
        </S.Container>
    );
};

export default NewestMeals;
