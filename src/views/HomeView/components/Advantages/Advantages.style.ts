import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 500px;
    gap: 5rem;
    padding-top: 5rem;

    @media screen and (max-width: 1440px) {
        grid-template-columns: 1fr 400px;
    }

    @media screen and (max-width: 1150px) {
        grid-template-columns: 1fr;
        justify-items: center;
        padding-top: 3rem;
    }
`;

export const TailsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    margin-left: 100px;
    padding-top: 15px;

    @media screen and (max-width: 1440px) {
        margin-left: 70px;
        padding-top: 50px;
    }

    @media screen and (max-width: 1150px) {
        display: none;
    }
`;

type PointTailContainerProps = {
    zIndex: number;
    active?: boolean;
};

export const PointTailContainer = styled.div<PointTailContainerProps>`
    display: flex;
    width: 150px;
    height: 150px;
    position: relative;
    opacity: 0.9;
    cursor: pointer;
    z-index: ${({ zIndex }) => zIndex};
    transform: scale(1.75, 0.9) rotate(-45deg);
    transition-property: all;
    transition: transform 0.75s ease-in-out;

    @media screen and (max-width: 1440px) {
        width: 125px;
        height: 125px;
    }

    @media screen and (max-width: 1150px) {
        margin-bottom: 35px;
    }

    ${({ active }) =>
        active &&
        css`
            transform: scale(1.5, 1.5) rotate(0) translateX(225px);
            transition-duration: 0.75s;

            @media screen and (max-width: 1440px) {
                transform: scale(1.5, 1.5) rotate(0) translateX(250px);
            }

            @media screen and (max-width: 1200px) {
                transform: scale(1.5, 1.5) rotate(0) translateX(175px);
            }

            @media screen and (max-width: 1150px) {
                transform: scale(1.5, 1.5) rotate(0) translateX(0);
            }
        `}
`;

type PointTailLayer = {
    backgroundGradient: string;
    active?: boolean;
};

export const PointTailTop = styled.div<PointTailLayer>`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 35px;
    background: linear-gradient(${({ backgroundGradient }) => backgroundGradient});

    svg {
        height: 90px;
        width: auto;
    }

    @media screen and (max-width: 1440px) {
        border-radius: 30px;

        svg {
            height: 70px;
            width: auto;
        }
    }
`;

export const PointTailBottom = styled.div<PointTailLayer>`
    border-radius: 35px 35px 32px 35px;
    height: 100%;
    width: 100%;
    background: linear-gradient(${({ backgroundGradient }) => backgroundGradient});
    position: absolute;
    top: 3px;
    left: -4px;

    transition-property: all;
    transition: transform 0.75s ease-in-out;

    @media screen and (max-width: 1440px) {
        border-radius: 30px 30px 27px 30px;
    }

    ${({ active }) =>
        active &&
        css`
            transform: translateY(-3px) translateX(4px);
        `}
`;

export const DescriptionContanier = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;

    @media screen and (max-width: 1440px) {
        gap: 1rem;
    }

    @media screen and (max-width: 1150px) {
        gap: 8rem;
    }
`;

type DescriptionPointProps = {
    active?: boolean;
};

export const DescriptionPoint = styled.div<DescriptionPointProps>`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    transition-property: all;
    transition: transform 0.75s ease-in-out;
    transition-duration: 0.75s;

    opacity: 0.4;
    transform: scale(0.75);

    ${({ active }) =>
        active &&
        css`
            transform: scale(1);
            opacity: 0.99;
        `}

    @media screen and (min-width: 1151px) {
        cursor: pointer;

        & > div:first-child {
            display: none;
        }
    }

    @media screen and (max-width: 1150px) {
        width: 450px;
        transform: scale(1);
        opacity: 0.99;
    }

    @media screen and (max-width: 560px) {
        width: 275px;
    }
`;

export const PointHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
        padding-top: 2px;
    }

    & > span {
        padding-top: 4px;
    }

    @media screen and (min-width: 1151px) {
        width: 100%;
    }
`;

type HeaderNumberProps = {
    color: string;
};

export const HeaderNumber = styled.div<HeaderNumberProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${({ color }) => color};
`;
