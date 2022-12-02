import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const AuthProvider = styled.div`
    display: flex;
    gap: 8px;
    width: max-content;
    height: 35px;
    align-items: center;
    border-radius: 5px;
    padding: 0 12px;
    cursor: pointer;

    svg {
        height: 20px;
        width: auto;
    }
`;

export const FacebookAuthButton = styled(AuthProvider)`
    background-color: #2374f2;
`;

export const GoogleAuthButton = styled(AuthProvider)`
    -webkit-box-shadow: -4px 4px 10px 5px rgba(239, 239, 239, 1);
    -moz-box-shadow: -4px 4px 10px 5px rgba(239, 239, 239, 1);
    box-shadow: -4px 4px 10px 5px rgba(239, 239, 239, 1);
`;
