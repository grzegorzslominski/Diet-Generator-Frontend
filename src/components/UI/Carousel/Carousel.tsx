import { useState, useRef, Children, useEffect } from "react";
import { motion } from "framer-motion";

import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-icon.svg";

import { CarouselProps } from "./Carousel.type";

import * as S from "./Carousel.style";

const Carousel = ({
    version,
    gap,
    widthElement,
    arrowsColor = "#989898",
    scrollAxie = "horizontal",
    displayOne,
    buttonPosition = {
        horizontal: -25,
    },
    children,
}: CarouselProps) => {
    const wrappperRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState(0);
    const [displayChildrenCount, setDisplayChildrenCount] = useState(1);

    useEffect(() => {
        if (wrappperRef.current) {
            const containerWidth = wrappperRef.current.offsetWidth;
            const displayChildren = Math.floor(containerWidth / widthElement);
            setDisplayChildrenCount(displayChildren);
        }
    }, [wrappperRef.current]);

    const handleUpdateIndex = (type: "-" | "+", actualIndex: number, shiftIndex: number) => {
        let currentIndex = index;
        if (type === "-") {
            if (actualIndex - shiftIndex < 0) currentIndex = 0;
            else currentIndex = actualIndex - shiftIndex;
        } else {
            if (actualIndex + shiftIndex > children.length - displayChildrenCount)
                currentIndex = children.length - displayChildrenCount;
            else currentIndex = actualIndex + shiftIndex;
        }
        setIndex(currentIndex);
    };

    const handleConstrains = (offsetX: number, offsetY: number) => {
        if (version === "arrows") {
            handleUpdateIndex(
                offsetX < 0 ? "+" : "-",
                index,
                Math.abs(Math.ceil(Math.abs(offsetX) / widthElement)),
            );
        } else {
            handleUpdateIndex(offsetY < 0 ? "+" : "-", index, 1);
        }
    };

    const translateExp = (
        buttonVersion: string,
        scrollAxie: "vertical" | "horizontal",
        widthElement: number,
        gap: number,
        activeIndex: number,
    ): string => {
        if (buttonVersion === "dots") {
            if (scrollAxie === "horizontal") return `translateX(-${activeIndex * 100}%)`;
            else return `translateY(-${activeIndex * 100}%)`;
        } else return `translateX(-${(widthElement + gap) * activeIndex}px)`;
    };

    return (
        <S.CarouselContainer
            height='auto'
            buttonVersion={version}
            ref={wrappperRef}
            displayOne={displayOne}
        >
            <S.CarouselInner>
                <motion.div
                    drag={scrollAxie === "horizontal" ? "x" : "y"}
                    onDragEnd={(event, info) => {
                        handleConstrains(info.offset.x, info.offset.y);
                    }}
                    dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                    dragMomentum={false}
                >
                    <S.Content
                        translateExp={translateExp(version, scrollAxie, widthElement, gap, index)}
                        gap={gap}
                        scrollAxie={scrollAxie}
                        buttonVersion={version}
                    >
                        {children}
                    </S.Content>
                </motion.div>
                <S.Indicators buttonVersion={version} imgArrayLength={children.length}>
                    {version === "arrows" ? (
                        <>
                            <S.ArrowButton
                                arrowsColor={arrowsColor}
                                onClick={() => handleUpdateIndex("-", index, 1)}
                                position='left'
                                buttonPosition={
                                    buttonPosition?.leftButton
                                        ? {
                                              individualPosition: {
                                                  horizontal: buttonPosition.leftButton.horizontal,
                                                  vertical: buttonPosition.leftButton.vertical,
                                              },
                                          }
                                        : {
                                              vertical: buttonPosition?.vertical,
                                              horizontal: buttonPosition?.horizontal,
                                          }
                                }
                            >
                                <ArrowIcon />
                            </S.ArrowButton>
                            <S.ArrowButton
                                arrowsColor={arrowsColor}
                                onClick={() => handleUpdateIndex("+", index, 1)}
                                position='right'
                                buttonPosition={
                                    buttonPosition?.rightButton
                                        ? {
                                              individualPosition: {
                                                  horizontal: buttonPosition.rightButton.horizontal,
                                                  vertical: buttonPosition.rightButton.vertical,
                                              },
                                          }
                                        : {
                                              vertical: buttonPosition?.vertical,
                                              horizontal: buttonPosition?.horizontal,
                                          }
                                }
                            >
                                <ArrowIcon />
                            </S.ArrowButton>
                        </>
                    ) : null}
                </S.Indicators>
                {version === "dots" ? (
                    <S.DotsContainer>
                        {children.map((child, childIndex) => {
                            return (
                                <S.DotButton
                                    key={index}
                                    active={childIndex === index}
                                    onClick={() => {
                                        setIndex(childIndex);
                                    }}
                                ></S.DotButton>
                            );
                        })}
                    </S.DotsContainer>
                ) : null}
            </S.CarouselInner>
        </S.CarouselContainer>
    );
};

export default Carousel;