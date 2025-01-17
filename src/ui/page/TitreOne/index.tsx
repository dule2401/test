import { useFetchAllInfo } from "@/core/hooks/useFetchAllInfo";
import { StyledPageWrapper } from "@/ui/layouts/styles";
import { BlocOne } from "./session/BlocOne";
import { BlocTwo } from "./session/BlocTwo";
import { BlocTwoSubTitle } from "./session/BlocTwoSubTitle";
import { BlocThree } from "./session/BlocThree";
import { BlocFour } from "./session/BlocFour";
import { BlocFive } from "./session/BlocFive";
import { styled } from "@/shared/styles";
import ImgFooter from "@/shared/assets/imgs/laurice-manaligod-OYaTU0j1N4I-unsplash.png";

const StyledFooter = styled("div", {
  textAlign: "center",
  background:
    "linear-gradient(180deg, rgba(0, 0, 0, 0) 65.5%, rgba(0, 0, 0, 0.2) 100%)",
  img: {
    width: "100%",
    "@media (max-width: 765px)": {
      height: "282px !important",
      objectFit: 'fill'
    },
  },
  ".footer_page": {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    ".footer_page_title": {
      color: "rgba(86, 44, 44, 1)",
      fontWeight: "600",
      fontSize: "52px",
      "@media (max-width: 765px)": {
        fontSize: "24px",
      },
    },
    ".footer_page_subtitle": {
      color: "rgba(86, 44, 44, 0.5)",
      fontWeight: "600",
      fontSize: "52px",
      "@media (max-width: 765px)": {
        fontSize: "24px",
      },
    },
    ".footer_page_text": {
      color: "",
      fontWeight: "400",
      fontSize: "24px",
      padding: "0 30%",
      "@media (max-width: 765px)": {
        padding: "0 24px",
        fontSize: "18px",
      },
    },
    ".footer_page_button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ".footer_page_button_btn": {
        background: "rgba(242, 84, 45, 1)",
        width: "150px",
        color: "white",
        height: "44px",
        borderRadius: "43px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});

const TitreOne = () => {
  const { data } = useFetchAllInfo({ revalidateOnMount: true, suspense: true });
  console.log(data);
  return (
    <StyledPageWrapper>
      <BlocOne
        title={data?.bloc_1.title}
        subTitle={data.bloc_1.subtitle}
        cases={data?.bloc_1?.cases}
      />

      <BlocTwo
        title={data?.bloc_2.title}
        subTitle={data.bloc_2.subtitle}
        cases={data?.bloc_2?.cases}
      />
      <BlocTwoSubTitle
        title={data?.bloc_2_2.title}
        subTitle={data.bloc_2_2.subtitle}
        data={data.bloc_2_2}
      />
      <BlocThree
        title={data?.bloc_3.title}
        subTitle={data.bloc_3.subtitle}
        cases={data?.bloc_3?.cases}
      />
      <BlocFour
        title={data.bloc_4.title}
        subtitle={data.bloc_4.subtitle}
        text_title={data.bloc_4.text_title}
        text={data.bloc_4.text}
        pictos={data.bloc_4.pictos}
      />
      <BlocFive props={data.bloc_5} />
      <StyledFooter>
        <div className="footer_page">
          <div className="footer_page_title">{data.bloc_6.title}</div>
          <div className="footer_page_subtitle">{data.bloc_6.subtitle}</div>
          <div className="footer_page_text">{data.bloc_6.text}</div>
          <div className="footer_page_button">
            <div className="footer_page_button_btn">{data.bloc_6.button}</div>
          </div>
        </div>
        <img src={ImgFooter} />
      </StyledFooter>
    </StyledPageWrapper>
  );
};

export default TitreOne;
