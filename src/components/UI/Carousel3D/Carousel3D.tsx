import { useState, ReactNode, useEffect, useRef } from "react";

import * as S from "./Carousel3D.style";

type CarouselProps = {
    gap: number;
    buttonPosition?: "edges" | "bottom";
    initialIndex: number;
    children: ReactNode[];
    responsiveBreakpoints?: {
        first: number;
        second: number;
        third: number;
        oneElement?: number;
    };
};

const Carousel3D = ({
    gap = 20,
    buttonPosition = "edges",
    initialIndex,
    children,
    responsiveBreakpoints = {
        first: 800,
        second: 600,
        third: 450,
        oneElement: 330,
    },
}: CarouselProps) => {
    const [activeElemet, setActiveElement] = useState<number>(initialIndex);
    const [displayedElements, setDisplayedElements] = useState(children);
    const [translate, setTranslate] = useState<number>(0);

    const activeElementRef = useRef<HTMLDivElement>(null);
    const disActiveElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleTranslate();
    }, [activeElemet]);

    const handleActiveElement = (valueToActiveIndex: number) => {
        let currentActiveElement = activeElemet;
        if (
            currentActiveElement + valueToActiveIndex >= 0 &&
            currentActiveElement + valueToActiveIndex < children.length
        ) {
            console.log("test");

            currentActiveElement = currentActiveElement + valueToActiveIndex;
            setActiveElement(currentActiveElement);
        }
    };

    const handleTranslate = () => {
        const currentActiveElement = activeElemet;

        let translateValue = 0;

        if (
            currentActiveElement !== null &&
            disActiveElementRef.current &&
            activeElementRef.current
        ) {
            if (activeElemet > 0) {
                translateValue =
                    disActiveElementRef.current.clientWidth *
                        (initialIndex - currentActiveElement) +
                    gap * (initialIndex - currentActiveElement);
            } else {
                translateValue = activeElementRef.current.clientWidth / 2 - 25;
            }
        }
        setTranslate(translateValue);
    };

    console.log(activeElemet === 0);
    console.log(children.length);

    return (
        <S.Container>
            <S.ContentWrapper>
                <S.Content offset={translate} gap={gap}>
                    {displayedElements.map((child, index) => (
                        <S.CarouselItem
                            active={activeElemet === index}
                            key={index}
                            ref={activeElemet !== index ? activeElementRef : disActiveElementRef}
                            onClick={() => setActiveElement(index)}
                        >
                            {child}
                        </S.CarouselItem>
                    ))}
                </S.Content>
            </S.ContentWrapper>

            <S.ButtonsContainer buttonPosition={buttonPosition}>
                <S.Arrow
                    disabled={activeElemet === 0}
                    first
                    onClick={() => handleActiveElement(-1)}
                />
                <S.Arrow
                    disabled={activeElemet === children.length - 1}
                    second
                    onClick={() => handleActiveElement(1)}
                />
            </S.ButtonsContainer>
        </S.Container>
    );
};

export default Carousel3D;
