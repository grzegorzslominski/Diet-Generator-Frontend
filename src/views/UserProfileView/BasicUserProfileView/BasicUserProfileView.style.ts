import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1500px;
    height: 990px;

    @media screen and (max-width: 1600px) {
        width: 1160px;
        height: 1446px;
    }

    @media screen and (max-width: 1280px) {
        width: 1060px;
    }

    @media screen and (max-width: 1220px) {
        width: 720px;
        height: 1849px;
    }

    @media screen and (max-width: 860px) {
        height: 1909px;
    }

    @media screen and (max-width: 820px) {
        width: 320px;
        height: auto;
        gap: 40px;
    }
`;

export const ProfileDetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 20px);
    grid-template-rows: repeat(auto-fill, 10px);

    @media screen and (max-width: 820px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .details {
        grid-column: 1;
    }

    .statistics {
        grid-column: 23;

        @media screen and (max-width: 1220px) {
            grid-column: 1;
            grid-row: 38;
        }
    }

    .ownMeals {
        grid-column: 61 / 76;
        height: 100%;
        width: 100%;
        grid-row: 1 / 43;

        @media screen and (max-width: 1600px) {
            grid-column: 1 / 43;
            grid-row: 89 / 109;
        }

        @media screen and (max-width: 1220px) {
            grid-column: span;
            grid-row: 85 / 105;
        }
    }

    .progress {
        grid-column: 23;
        grid-row: 47;

        @media screen and (max-width: 1600px) {
            grid-column: 1;
            grid-row: 68;
        }

        @media screen and (max-width: 1220px) {
            grid-column: 1;
            grid-row: 109;
        }
    }

    .currentDiet {
        grid-column: 45;
        grid-row: 47;

        @media screen and (max-width: 1600px) {
            grid-column: 23;
        }

        @media screen and (max-width: 1220px) {
            grid-column: 1;
            grid-row: 130;
        }
    }

    .exclusion {
        grid-column: 1;
        grid-row: 68;

        @media screen and (max-width: 1600px) {
            grid-column: 1;
            grid-row: 113;
        }

        @media screen and (max-width: 1220px) {
            grid-column: 23;
            grid-row: 151;
        }
    }

    .premium {
        grid-column: 23;
        grid-row: 68;

        @media screen and (max-width: 1220px) {
            grid-column: 1;
            grid-row: 151;
        }
    }

    .survey {
        grid-column: 56 / 76;
        grid-row: 68 / 84;

        @media screen and (max-width: 1600px) {
            grid-column: 45 / 76;
            grid-row: 89 / 109;
        }

        @media screen and (max-width: 1280px) {
            grid-column: 39 / 76;
        }

        @media screen and (max-width: 1220px) {
            grid-column: 23 / 37;
            grid-row: 109;
        }
    }
`;
