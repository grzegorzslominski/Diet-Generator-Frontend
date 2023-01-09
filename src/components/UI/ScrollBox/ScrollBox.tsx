import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { ScrollBoxProps } from "./ScrollBox.type";

import * as S from "./ScrollBox.style";

const ScrollBox = ({
    children,
    height,
    scrollDistance,
    scrollPosition = "inside",
    mobileScrollDistance,
}: ScrollBoxProps) => {
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const scrollContentRef = useRef<HTMLDivElement>(null);

    const [scrollDistanceValue, setScrollDistanceValue] = useState(scrollDistance);
    const [hiddenScroll, setHiddenScroll] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const animation = useAnimation();

    useEffect(() => {
        if (scrollContentRef.current) {
            scrollVisibilityHandler(scrollContentRef.current, height);
        }
        window.addEventListener("resize", () => {
            if (scrollContentRef.current) {
                scrollVisibilityHandler(scrollContentRef.current, height);
            }
        });

        if (mobileScrollDistance) {
            window.addEventListener("resize", () => {
                if (window.innerWidth < 760) {
                    setScrollDistanceValue(mobileScrollDistance);
                } else {
                    setScrollDistanceValue(scrollDistance);
                }
            });
        }

        return () => {
            window.removeEventListener("resize", () => {
                if (scrollContentRef.current) {
                    scrollVisibilityHandler(scrollContentRef.current, height);
                }
            });

            if (mobileScrollDistance) {
                window.addEventListener("resize", () => {
                    if (window.innerWidth < 760) {
                        setScrollDistanceValue(mobileScrollDistance);
                    } else {
                        setScrollDistanceValue(scrollDistance);
                    }
                });
            }
        };
    }, []);

    useEffect(() => {
        if (scrollContentRef.current) {
            scrollVisibilityHandler(scrollContentRef.current, height);
        }
    }, [children]);

    const handleScrollContentPosition = (element: HTMLDivElement, pointValue: number) => {
        let scrollRatio = 0;
        let parentPosition = 0;

        if (scrollContentRef.current) {
            parentPosition = element.getBoundingClientRect().top + window.scrollY;
        }
        if (pointValue > parentPosition && pointValue < parentPosition + height) {
            scrollRatio = (pointValue - parentPosition) / height;

            element.scrollTo({
                top: scrollRatio * (element.scrollHeight - height),
            });
        }
    };

    const handleScrollbarPosition = (element: HTMLDivElement) => {
        const scrollRatio = element.scrollTop / (element.scrollHeight - height);
        if (!scrolled && scrollRatio * height <= height - 11) {
            animation.start({
                y: scrollRatio * height,
            });
        }
    };

    const scrollVisibilityHandler = (scrollContent: HTMLDivElement, heightContainer: number) => {
        setHiddenScroll(scrollContent.scrollHeight < heightContainer);
        handleScrollbarPosition(scrollContent);
    };

    return (
        <S.Container scrollDistance={scrollDistanceValue} scrollPosition={scrollPosition}>
            <S.Content
                height={height}
                scrollDistance={scrollDistanceValue}
                scrollPosition={scrollPosition}
                ref={scrollContentRef}
                onScroll={() => {
                    if (scrollContentRef.current) {
                        handleScrollbarPosition(scrollContentRef.current);
                    }
                }}
            >
                {children}
            </S.Content>
            <S.Scroll
                height={height}
                ref={scrollbarRef}
                hidden={hiddenScroll}
                scrollDistance={scrollDistanceValue}
                scrollPosition={scrollPosition}
            >
                <motion.div
                    drag={"y"}
                    dragMomentum={false}
                    dragElastic={0}
                    dragConstraints={scrollbarRef}
                    animate={animation}
                    transition={{ type: "Inertia" }}
                    onDragStart={() => setScrolled(true)}
                    onDrag={(event, info) => {
                        if (scrollContentRef.current) {
                            handleScrollContentPosition(scrollContentRef.current, info.point.y);
                        }
                    }}
                    onDragEnd={() => setScrolled(false)}
                >
                    <S.Circle hidden={hiddenScroll} />
                </motion.div>
            </S.Scroll>
        </S.Container>
    );
};

export default ScrollBox;
