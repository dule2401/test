import { Button, Title } from "@/shared/components";
import { styled } from "@/shared/styles";
import { Col, Row } from "antd";
import Img1 from "@/shared/assets/imgs/bloc1/image.png";
import Img2 from "@/shared/assets/imgs/bloc1/image (4).png";
import Img3 from "@/shared/assets/imgs/bloc1/image (5).png";
import Icon from "@ant-design/icons";
import { IconArrowUpRightBlue } from "@/shared/assets/icons";
import { StyledBlocWapper } from "@/ui/layouts/styles";

const StyledBlockItem = styled("div", {
  paddingBottom: "24px",
  img: {
    width: "100%",
  },
  ".case_title": {
    color: "#F2542D",
    fontSize: "20px",
  },
  ".case_subtitle": {
    color: "#562C2C",
    fontSize: "28px",
  },
  ".case_description": {
    fontSize: "18px",
    color: "#562C2C",
    lineClamp: 2,
  },
  "@media (max-width: 765px)": {
    width: "100%",
    minWidth: "100%",
  },
});

const StyledButton = styled(Button, {
  marginTop: "24px",
  borderRadius: "30px !important",
  minWidth: "222px",
  border: "1px solid #562C2C 30%",
  fontSize: "18px",
  fontWeight: "normal !important",
  color: "#562C2C",
});

const StyledBlocks = styled(Row, {
  marginTop: "24px",
  width: "100%",
  flexWrap: "wrap",
});

const StyledBlockItemCol = styled(Col, {
  "@media (max-width: 765px)": {
    width: "100%",
    minWidth: "100%",
  },
});

type TBlocOneProps = {
  cases: any[];
  title: string;
  subTitle: string;
};

export const BlocOne = ({ cases, title, subTitle }: TBlocOneProps) => {
  const updatedCases = cases.map((item, index) => {
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
      default:
        image = Img1; // default image if more than 3 items
        break;
    }
    return { ...item, image }; // Add the image to the case
  });
  return (
    <StyledBlocWapper>
      <Title title={title} subTitle={subTitle} />
      <StyledBlocks>
        {updatedCases.map((item: any, index: number) => (
          <StyledBlockItemCol
            span={8}
            style={{ padding: "0 10px" }}
            key={index}
          >
            <StyledBlockItem
              style={{
                marginTop: index === 1 ? "0" : "30px",
              }}
            >
              <img src={item.image} alt={`Image ${index}`} />
              <div className="case_title">{item.category}</div>
              <div className="case_subtitle">{item.tagline}</div>
              <div className="case_description">{item.description}</div>
              <StyledButton
                icon={<Icon component={IconArrowUpRightBlue} />}
                iconPosition={"end"}
              >
                Forfait {index + 1}
              </StyledButton>
            </StyledBlockItem>
          </StyledBlockItemCol>
        ))}
      </StyledBlocks>
    </StyledBlocWapper>
  );
};
