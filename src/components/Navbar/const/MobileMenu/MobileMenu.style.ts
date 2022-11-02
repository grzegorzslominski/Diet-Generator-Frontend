import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(18, 18, 18, 0.9);
    backdrop-filter: blur(4px);
    z-index: 1100;
    justify-content: center;
    padding: 0 40px;
    gap: 28px;

    animation: showMobileMenu 0.5s ease-out;
    -webkit-animation: showMobileMenu 0.5s ease-out;
    -moz-animation: showMobileMenu 0.5s ease-out;
    -ms-animation: showMobileMenu 0.5s ease-out;

    @keyframes showMobileMenu {
        0% {
            opacity: 0.3;
            transform: translateX(-200px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;
