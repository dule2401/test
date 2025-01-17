import { Title } from "@/shared/components";
import { styled } from "@/shared/styles";
import { Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import Icon from "@ant-design/icons";
import { IconSend } from "@/shared/assets/icons";
import { StyledBlocWapper } from "@/ui/layouts/styles";
import { useFetchAllInfo } from "@/core/hooks/useFetchAllInfo";

const StyledBlocTwo = styled("div", {
  padding: "40px 0 80px 0",
});

const StyledForm = styled(Form, {
  label: {
    width: "80px",
  },
  input: {
    borderRadius: "40px",
    border: "1px solid rgba(86, 44, 44, 0.3)",
    boxShadow: "0px 0px 30px 0px rgba(242, 84, 45, 0.1)",
    height: "51px",
  },
});

const StyledFormFooter = styled("div", {
  display: "flex",
  justifyContent: "end",
  gap: "12px",
});

const StyledBtn = styled("button", {
  width: "200px",
  border: "1px solid #562C2C4D",
  borderRadius: "33px",
  background: "white",
  color: "#562C2C",
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "500",
});

const StyledBtnSend = styled("button", {
  width: "200px",
  border: "1px solid #F2542D",
  borderRadius: "33px",
  background: "#F2542D",
  color: "white",
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
});

type TBlocTwoProps = {
  title: string;
  subTitle: string;
  data: any;
};

export const BlocTwoSubTitle = ({ title, subTitle, data }: TBlocTwoProps) => {
  const [form] = useForm();
  const [editorContent, setEditorContent] = useState("");
  const handleEditorChange = (content: any, editor: any) => {
    setEditorContent(content);
  };
  return (
    <StyledBlocWapper>
      <Title title={title} subTitle={subTitle} />
      {/* <CustomerCalendar onPanelChange={onPanelChange} />; */}
      <StyledForm
        form={form}
        initialValues={{
          country: "Việt Nam",
        }}
      >
        <Form.Item name={data?.btn_1[0]} label={data?.btn_1[0]}>
          <Input placeholder={data?.btn_1[1]} className="input" />
        </Form.Item>
        <Form.Item name={data?.btn_2[0]} label={data?.btn_2[0]}>
          <Input placeholder={data?.btn_2[1]} />
        </Form.Item>
        <Form.Item name={"Message"} label={data?.btn_3}>
          <Editor
            apiKey="0alv44wcfq3y1fat8mlf5qq6q7pkfa2mhcr9wx9fp67zsqvd" // Optional, you can get it from TinyMCE
            value={editorContent}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={handleEditorChange}
          />
        </Form.Item>
        <Form.Item name={"Fichier:"} label="Fichier"></Form.Item>
      </StyledForm>
      <StyledFormFooter>
        <StyledBtn>{data.btn_5}</StyledBtn>
        <StyledBtnSend>
          {data.btn_6}
          <Icon component={IconSend} />
        </StyledBtnSend>
      </StyledFormFooter>
    </StyledBlocWapper>
  );
};
