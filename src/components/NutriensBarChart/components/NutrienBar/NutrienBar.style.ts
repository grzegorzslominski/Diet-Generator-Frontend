import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
`;

export const MainContent = styled.div`
    display: flex;
    gap: 4px;
    height: 35px;
    align-items: flex-end;
`;

type BarProps = {
    fillValue: string;
    fillColor: string;
};

export const Bar = styled.div<BarProps>`
    height: 100%;
    width: 10px;
    position: relative;

    ::after {
        width: 100%;
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: ${({ fillValue }) => `${fillValue}%`};
        background-color: ${({ fillColor }) => fillColor};
    }
`;
