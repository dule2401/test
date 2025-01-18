import { Title } from "@/shared/components";
import { styled } from "@/shared/styles";
import ImgMapContainer from "@/shared/assets/imgs/Activities map container.png";
import ImgBackgroud from "@/shared/assets/imgs/shutterstock_2145025349-[Converted] 2.png";

const StyledBlocTwo = styled("div", {
  padding: "40px 0 40px 0 ",
  backgroundImage: `url(${ImgBackgroud})`,
  backgroundSize: "cover",
  background: "rgba(255, 246, 244, 1)",
  // position: "relative",
  ".container_bloc": {
    top: '0',
    // position: "absolute",
    padding: "0 15%",
    "@media (max-width: 765px)": {
      padding: "0 24px !important",
    },
  },
});

const StyledImgWrapper = styled("img", {
  width: "100%",
  objectFit: "cover",
  "@media (max-width: 765px)": {
    height: "600px",
    borderRadius: "24px !important",
  },
});

type TBlocTwoProps = {
  cases: any[];
  title: string;
  subTitle: string;
};

export const BlocTwo = ({ cases, title, subTitle }: TBlocTwoProps) => {
  return (
    <StyledBlocTwo>
      {/* <img src={ImgBackgroud} alt="" /> */}
      <div className="container_bloc">
        <Title title={title} subTitle={subTitle} />
        <StyledImgWrapper src={ImgMapContainer} />
      </div>
    </StyledBlocTwo>
  );
};
