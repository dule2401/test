import { styled } from "@/shared/styles";
import { StyledBlocWapper } from "@/ui/layouts/styles";
import ImgBackground from "@/shared/assets/imgs/Share your adventures image (1).png";
import SliderComponents from "@/shared/components/Slider";
import Img1 from "@/shared/assets/imgs/bloc4/image (7).png";
import Img2 from "@/shared/assets/imgs/bloc4/image (8).png";
import Img3 from "@/shared/assets/imgs/bloc4/image (9).png";
import Img4 from "@/shared/assets/imgs/bloc4/image (10).png";
import { useRef } from "react";
import { IconArrowUpRight, IconCamera } from "@/shared/assets/icons";
import Icon from "@ant-design/icons";

const StyledBlocFive = styled("div", {
  // height: "max-content
  // width: "100%",
  background:
    "linear-gradient(0deg, rgb(265, 252, 255), #B5E4F5), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
});
const StyledBlocHeader = styled("div", {
  display: "flex",
  gap: "24px",
  padding: "24px",
  flexWrap: "wrap",
  "@media (max-width: 765px)": {
    flexDirection: "column-reverse",
  },
  ".header_left": {
    flex: 1,
    color: "#562C2CCC",
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "Poppins",
  },
  ".header_right": {
    fontWeight: "600",
    fontSize: "40px",

    flex: 1,
    color: "#562C2C",
    textTransform: "uppercase",
    "@media (max-width: 765px)": {
      fontSize: "24px",
      lineHeight: "unset",
    },
    ".tag": {
      color: "#F2542D",
    },
  },
});
const StyledBlocContent = styled("div", {
  background: "#0E959433",
  borderRadius: "20px",
  padding: "40px 100px",
  "@media (max-width: 765px)": {
    padding: "0px",
  },
  ".content_block": {
    background: "white",
    borderRadius: "16px",
    padding: "24px",
    minWidth: "calc(100% - 48px)",

    img: {
      width: "100%",
      borderRadius: "unset",
    },
    ".review_content": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ".time_review": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #6666661A",
        borderRadius: "100px",
        width: "150px",
        height: "42px",
        textAlign: "center",
        color: "#000000",
        fontWeight: "400",
        fontSize: "20px",
        padding: '0 14px',
        "@media (max-width: 765px)": {
          fontSize: "14px",
        },
      },
      ".content_block_title": {
        color: "#000000",
        fontSize: "24px",
        fontWeight: "600",
      },
      ".content_block_text": {
        color: "#666666",
        fontSize: "18px",
        fontWeight: "400",
      },
    },
  },
});
const StyledBlocFooter = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "24px",
  gap: "24px",
  width: "100%",
  "@media (max-width: 765px)": {
    flexWrap: "wrap",
  },
});

const StyledBlockItem = styled("div", {
  borderRadius: "20px",
  width: "24%",
  "@media (max-width: 765px)": {
    flexWrap: "wrap",
    width: "46%",
  },
  img: {
    width: "100%",
  },
  ".author": {
    display: "flex",
    alignItems: "center",
    background: "#562C2C99",
    color: "White",
    marginTop: "-56px",
    position: "relative",
    borderRadius: " 0 0 14px 14px",
    height: "50px",
    justifyContent: "space-between",
    padding: "0 12px",
    "@media (max-width: 765px)": {
      fontSize: "14px",
    },
  },
});

export const BlocFive = ({ props }: any) => {
  const updatedCases = props.reviews.map((item: any, index: number) => {
    let image;
    switch (index) {
      case 0:
        image = ImgBackground;
        break;
      case 1:
        image = Img1;
        break;
      case 2:
        image = Img2;
        break;
      case 3:
        image = Img3;
        break;
      case 4:
        image = Img4;
        break;
      default:
        image = Img1;
        break;
    }
    return { ...item, image };
  });

  const imgRef = useRef(null);

  return (
    <StyledBlocFive>
      <StyledBlocWapper>
        <StyledBlocHeader>
          <div className="header_left">{props.text}</div>
          <div className="header_right">
            {props.title}
            <span className="tag"> #BASIC</span>
          </div>
        </StyledBlocHeader>
        <StyledBlocContent>
          <SliderComponents isAuto={false}>
            {updatedCases?.map((item: any, index: number) => (
              <div className="content_block" key={index}>
                <img src={ImgBackground} />
                <div className="review_content">
                  <div>
                    <div className="content_block_title">{item.author}</div>
                    <div className="content_block_text">{item.review}</div>
                  </div>
                  <div className="time_review">{item.date}</div>
                </div>
              </div>
            ))}
          </SliderComponents>
        </StyledBlocContent>
        <StyledBlocFooter>
          {updatedCases.slice(1).map((item: any, index: number) => (
            <StyledBlockItem key={index}>
              <img ref={imgRef} src={item.image} alt="" />
              <div className="author">
                <Icon component={IconCamera} />
                {item.author}
                <Icon component={IconArrowUpRight} />
              </div>
            </StyledBlockItem>
          ))}
        </StyledBlocFooter>
        <p style={{ textAlign: "center" }}>{props.footer}</p>
      </StyledBlocWapper>
    </StyledBlocFive>
  );
};
