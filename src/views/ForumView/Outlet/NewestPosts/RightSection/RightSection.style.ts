import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    width: 250px;
    position: relative;
`;
export const Container = styled.div`
    padding: 15px;
    background: #ffffff;
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 250px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const Container2 = styled(Container)`
    align-items: center;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        width: 65px;
        height: 60px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
`;

export const MiddleSection = styled.div`
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Description = styled.div`
    min-height: 160px;
    max-height: 160px;
    text-overflow: ellipsis;
    overflow: hidden;
`;
export const IconContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-evenly;

    & > svg {
        filter: brightness(0%);
        height: 20px;
        width: 30px;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;
