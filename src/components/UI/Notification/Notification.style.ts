import { motion } from "framer-motion";
import styled from "styled-components";

import { ReactComponent as Close } from "../../../assets/icons/XIcon.svg";

export const Container = styled(motion.div)`
    opacity: 1;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 360px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.secondaryColor};

    border-radius: 10px;

    z-index: 1000;

    @media only screen and (max-width: 520px) {
        width: 100%;
        bottom: 0;
        right: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    z-index: 999;
    padding: 20px 40px;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
`;

export const StyledClose = styled(Close)`
    z-index: 1005;
    width: 20px;
    max-width: 20px;
    height: auto;

    position: absolute;
    top: 16px;
    right: 16px;

    svg {
        fill: white;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
`;
