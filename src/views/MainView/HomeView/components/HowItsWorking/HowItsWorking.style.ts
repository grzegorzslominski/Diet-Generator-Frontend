import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;

    @media screen and (max-width: 420px) {
        gap: 4rem;
    }
`;

export const WorkingPointsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 3rem;

    @media screen and (max-width: 1200px) and (min-width: 581px) {
        display: grid;
        grid-template-columns: auto auto;

        & > div:nth-child(2) {
            flex-direction: column;

            & > div:last-child {
                padding: 5rem 0;
                svg {
                    transform: rotate(90deg) translateY(140px);
                }
            }
        }
    }

    @media screen and (max-width: 580px) {
        flex-direction: column;
    }
`;

export const WorkingPointContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 580px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const WorkingPoint = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 9rem;
    svg {
        height: 5rem;
        width: fit-content;
    }

    @media screen and (max-width: 580px) {
        align-items: center;

        /* svg {
            height: 8rem;
            width: fit-content;
        } */
    }
`;

export const PointsContainer = styled.ul`
    margin: -0.5rem 0 0 0;
    padding: 0 0 0 20px;
`;

export const LineContainer = styled.div`
    padding-top: 40px;

    & > svg {
        max-width: 5rem;
    }

    @media screen and (max-width: 580px) {
        padding: 80px 0 60px 0;

        & > svg {
            transform: rotate(90deg);
        }
    }
`;
