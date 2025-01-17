import { styled } from "@/shared/styles";
import IconTitle from "@/shared/assets/imgs/Mask group.png";
import ImgContent from "@/shared/assets/imgs/image (6).png";
import Img1 from "@/shared/assets/imgs/bloc4/icon container.png";
import Img2 from "@/shared/assets/imgs/bloc4/container.png";
import Img3 from "@/shared/assets/imgs/bloc4/container (1).png";
import Img4 from "@/shared/assets/imgs/bloc4/container (2).png";
import Img5 from "@/shared/assets/imgs/bloc4/Footer icon container.png";
import { StyledBlocWapper } from "@/ui/layouts/styles";

const StyledBlocFour = styled("div", {
  display: "flex",
  gap: "10px",
  "@media (max-width: 765px)": {
    flexWrap: "wrap",
  },
  ".title": {
    color: "#F2542D",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "48px",
    lineHeight: "48px",
  },
  ".text_box": {
    marginTop: "24px",
    display: "flex",
    gap: "28px",
    ".content_fix": {
      width: "10%",
      marginTop: "20px",
      borderTop: "2px solid #BBBBBB",
    },
    ".content_box": {
      width: "80%",
      ".text_title": {
        color: "#562C2C",
        fontSize: "28px",
        fontWeight: "600",
      },
      ".content": {
        color: "#562C2CCC",
        fontSize: "18px",
        fontWeight: "400",
      },
    },
  },
});

const StyledImg = styled("img", {});
const StyledContent = styled("div", {});
const StyledImgContent = styled("img", {
  width: "40%",
  "@media (max-width: 765px)": {
    width: "100%",
  },
});

const StyledPartner = styled("div", {
  display: "flex",
  marginTop: "60px",
  justifyContent: "space-between",
  gap: "10px",
  "@media (max-width: 765px)": {
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const StyledPartnerItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  "@media (max-width: 765px)": {
    width: "48%",
  },
  ".partner_title": {
    color: "#562C2C",
    fontSize: "24px",
    fontWeight: "500",
  },
  ".partner_content": {
    textAlign: "center",
    fontSize: "18px",
    color: "#562C2CCC",
  },
});

type TBlocFour = {
  title: string;
  subtitle: string;
  text_title: string;
  text: string;
  pictos: any[];
};

export const BlocFour = ({
  title,
  subtitle,
  text_title,
  text,
  pictos,
}: TBlocFour) => {
  const updatedCases = pictos.map((item, index) => {
    let image;
    switch (index) {
      case 0:
        image = Img1;
        break;
      case 1:
        image = Img2;
        break;
      case 2:
        image = Img3;
        break;
      case 3:
        image = Img4;
        break;
      case 4:
        image = Img5;
        break;
      default:
        image = Img1; // default image if more than 3 items
        break;
    }
    return { ...item, image }; // Add the image to the case
  });
  return (
    <StyledBlocWapper>
      <StyledBlocFour>
        <StyledContent>
          <StyledImg src={IconTitle} />
          <div className="title">{title}</div>
          <div className="text_box">
            <div className="content_fix"></div>
            <div className="content_box">
              <div className="text_title">{text_title}</div>
              <div className="content">{text}</div>
            </div>
          </div>
        </StyledContent>
        <StyledImgContent src={ImgContent} />
      </StyledBlocFour>
      <StyledPartner>
        {updatedCases.map((item, index: number) => (
          <StyledPartnerItem key={index}>
            <img src={item.image} />
            <div className="partner_title">{item.title}</div>
            <div className="partner_content">{item.description}</div>
          </StyledPartnerItem>
        ))}
      </StyledPartner>
    </StyledBlocWapper>
  );
};
