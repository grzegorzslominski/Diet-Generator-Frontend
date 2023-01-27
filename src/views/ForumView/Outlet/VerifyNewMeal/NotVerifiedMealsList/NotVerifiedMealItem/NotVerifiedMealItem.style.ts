import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    background: #ffffff;
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    padding: 15px;

    &:hover {
        border: solid black 1px;
    }

    @media screen and (max-width: 1250px) {
        width: 500px;
    }

    @media screen and (max-width: 535px) {
        width: 300px;
    }
`;

export const Header = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
        width: 65px;
        height: 60px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
    @media screen and (max-width: 535px) {
        justify-content: center;
        width: 100%;
    }
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Description = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    max-height: 325px;
    text-overflow: ellipsis;
    overflow: hidden;
    direction: rtl;
    text-align: left;
`;
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    & > svg {
        filter: brightness(0%);
    }
`;
export const Footer = styled.div`
    position: relative;
    width: 100%;
    padding: 0 10% 0 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const FsecondItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    max-height: 40px;
    justify-content: center;
`;
