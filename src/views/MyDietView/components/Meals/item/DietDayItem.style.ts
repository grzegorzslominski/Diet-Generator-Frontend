import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 0 24px;
    width: 1000px;

    @media screen and (max-width: 1220px) {
        width: 620px;
    }

    @media screen and (max-width: 860px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 320px;
    }
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    gap: 12px;
`;

export const Border = styled.div`
    border: 1px solid #4e4c75;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    margin-top: 30px;

    @media screen and (max-width: 870px) {
        margin: 0;
    }
`;

export const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-left: 10px;
    padding-right: 10px;

    @media screen and (max-width: 870px) {
        margin: 10px 0 10px 0;
        padding: 0;

        img {
            bottom: 10px;
            left: 50%;
        }
    }
`;

type ActionContainerProps = {
    isOpen: boolean;
};

export const ActionContainer = styled.div<ActionContainerProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 12px;

    img {
        height: 15px;
        cursor: pointer;

        ${({ isOpen }) =>
            isOpen &&
            css`
                transform: translateX(-50%) rotateX(180deg);
            `};
    }
`;

export const MealList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 12px;
    margin: 0;

    & > li {
        ::marker {
            font-size: 12px;
            color: ${({ theme }) => theme.colors.secondaryColor};
        }

        & > span {
            width: 70px;
        }
    }
`;

export const LiStyled = styled.li`
    color: black;

    @media screen and (max-width: 870px) {
        display: flex;
        font-size: 20px;
    }
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 870px) {
        justify-content: center;
    }
`;

export const KcalContainer = styled.div`
    display: flex;
    align-items: flex-end;
    padding-top: 3px;
`;
