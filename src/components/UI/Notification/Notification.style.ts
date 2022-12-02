import { motion } from "framer-motion";
import styled from "styled-components";

import { ReactComponent as Close } from "../../../assets/modal/close.svg";

export const Container = styled(motion.div)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 480px;
    display: flex;
    flex-direction: column;
    background: #121212;
    border: 4px #161819 solid;

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
    width: 15.31px;
    height: 14px;
    position: absolute;
    top: 16px;
    right: 16px;

    &:hover {
        cursor: pointer;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
`;
