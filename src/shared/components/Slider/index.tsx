import React, { useEffect, useRef } from "react";
import { createStitches } from "@stitches/react";

interface SliderComponentsProps {
  children: React.ReactNode;
  isAuto?: boolean;
}

const { styled } = createStitches({
  theme: {
    colors: {
      itemBg: "#f5f5f5",
      buttonBg: "rgba(0, 0, 0, 0.5)",
      buttonHoverBg: "rgba(0, 0, 0, 0.7)",
    },
    space: {
      padding: "16px",
      gap: "16px",
    },
  },
  utils: {
    lineClamp: (value: number) => ({
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      "-webkit-line-clamp": value,
    }),
  },
});

export const StyledSliderContainer = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",
});

export const StyledSliderWrapper = styled("div", {
  display: "flex",
  gap: "$gap",
  width: "100%",
  scrollSnapType: "x mandatory", // Bắt buộc cuộn theo từng phần tử
  overflowX: "auto",
  scrollBehavior: "smooth",
  padding: "10px 0",
  "@media (max-width: 765px)": {
    padding: "0",
  },
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const StyledWapperItem = styled("div", {
  flex: "0 0 24%", // Mỗi item chiếm đúng 1/4 chiều rộng của slider
  scrollSnapAlign: "start", // Đảm bảo item được căn thẳng khi cuộn đến
  borderRadius: "8px",
  textAlign: "center",
  maxWidth: "25%",
  // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  img: {
    width: "100%",
    height: "185px",
    objectFit: "cover",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.3s ease", // Smooth transition for zoom effect
    "&:hover": {
      transform: "scale(1.05)", // Scale up by 5%
    },
  },
  ".title": {
    color: "#003d68",
    fontWeight: "700",
    textAlign: "start",
  },
  ".content": {
    textAlign: "start",
    lineClamp: 3,
  },
  "@media (max-width: 1050px)": {
    flex: "0 0 48%", // For smaller screens, show 2 items (each takes 1/2 width)
    maxWidth: "50%",
  },
  "@media (max-width: 765px)": {
    flex: "0 0 100%", // For smaller screens, show 2 items (each takes 1/2 width)
    maxWidth: "100%",
  },
  variants: {
    oneItem: {
      true: {
        flex: "0 0 100%", // Mỗi item chiếm đúng 1/4 chiều rộng của slider
        maxWidth: "100%",
        height: "100%",
        "@media (max-width: 765px)": {
          flex: "0 0 100%",
          maxWidth: "100%",
        },
      },
    },
    fiveItem: {
      true: {
        flex: "0 0 19%", // Mỗi item chiếm đúng 1/4 chiều rộng của slider
        maxWidth: "19%",
        "@media (max-width: 765px)": {
          flex: "0 0 50%",
          maxWidth: "50%",
        },
      },
    },
  },
});

const Button = styled("button", {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "$buttonBg",
  border: "none",
  color: "white",
  padding: "10px",
  cursor: "pointer",
  zIndex: 1,
  borderRadius: "50%",
  fontSize: "18px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "$buttonHoverBg",
  },
});

export const PrevButton = styled(Button, {
  left: "10px",
});

export const NextButton = styled(Button, {
  right: "10px",
});

const SliderComponents: React.FC<SliderComponentsProps> = ({
  children,
  isAuto,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      if (sliderRef.current.scrollLeft === 0) {
        // If at the start, move to the last item seamlessly
        sliderRef.current.scrollTo({
          left: sliderRef.current.scrollWidth - sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      } else {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const isAtEnd =
        sliderRef.current.scrollLeft + sliderRef.current.offsetWidth ===
        sliderRef.current.scrollWidth;

      if (isAtEnd) {
        // If at the end, scroll back to the start seamlessly
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (isAuto) {
      const interval = setInterval(() => {
        scrollRight();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAuto]);

  return (
    <StyledSliderContainer>
      <StyledSliderWrapper ref={sliderRef}>{children}</StyledSliderWrapper>
    </StyledSliderContainer>
  );
};

export default SliderComponents;
