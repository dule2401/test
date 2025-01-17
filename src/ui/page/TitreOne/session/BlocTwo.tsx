import { Title } from "@/shared/components";
import { styled } from "@/shared/styles";
import ImgMapContainer from "@/shared/assets/imgs/Activities map container.png";
import { StyledBlocWapper } from "@/ui/layouts/styles";


const StyledBlocTwo = styled("div", {
  padding: "40px 0 80px 0",
});

const StyledImgWrapper = styled("img", {
  width: "100%",
  objectFit: 'cover'
});

type TBlocTwoProps = {
  cases: any[];
  title: string;
  subTitle: string;
};

export const BlocTwo = ({ cases, title, subTitle }: TBlocTwoProps) => {
  return (
    <StyledBlocWapper>
      <Title title={title} subTitle={subTitle} />
      <StyledImgWrapper src={ImgMapContainer} />
    </StyledBlocWapper>
  );
};
