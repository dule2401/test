import { Title } from "@/shared/components";
import { styled } from "@/shared/styles";
import { Calendar, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import Icon from "@ant-design/icons";
import {
  IconArrowLeft,
  IconArrowRight,
  IconAttachmentFile,
  IconSend,
} from "@/shared/assets/icons";
import { StyledBlocWapper } from "@/ui/layouts/styles";
import moment from "moment";

const StyledForm = styled(Form, {
  marginTop: "40px",
  label: {
    width: "120px",
    fontWeight: "400 !important",
    fontSize: "24px !important",
    color: "rgba(86, 44, 44, 1) !important",
    "@media (max-width: 765px)": {
      width: "70px",
      fontSize: "16px !important",
    },
  },
  input: {
    width: "100%",
    borderRadius: "40px",
    border: "1px solid rgba(86, 44, 44, 0.3)",
    boxShadow: "0px 0px 30px 0px rgba(242, 84, 45, 0.1)",
    height: "40px",
  },
  ".ant-row": {
    "@media (max-width: 765px)": {
      width: "100% !important",
    },
  },
  ".ant-col": {
    "@media (max-width: 765px)": {
      flex: "unset !important",
    },
  },
  ".ant-form-item-control": {
    "@media (max-width: 765px)": {
      width: "80% !important",
    },
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

const CustomerCalendar = styled(Calendar, {
  border: "1px solid rgba(86, 44, 44, 0.3)",
  padding: "24px 32px",
  borderRadius: "24px",
  boxShadow: "0px 0px 30px 0px rgba(242, 84, 45, 0.1)",
  textAlign: "center",
  "@media (max-width: 1050px)": {
    padding: "16px",
  },
  th: {
    textAlign: "center",
    padding: "unset !important",
    fontWeight: "600 !important",
    fontSize: "18px",
    lineHeight: "24px",
    color: "rgba(86, 44, 44, 1) !important",
    paddingBottom: "12px !important",
  },
  td: {
    padding: "4px !important",
  },
  ".ant-picker-cell-selected": {
    ".ant-picker-cell-inner": {
      color: "rgba(153, 153, 153, 1) !important",
      background: "white !important",
    },
  },
  ".ant-picker-calendar-date-value": {
    paddingTop: "4px",
    "@media (max-width: 765px)": {
      paddingTop: "unset",
    },
  },
  ".has-event": {
    border: " 1px solid rgba(242, 84, 45, 1) !important",
    ".antd-calendar-text": {
      fontWeight: "400",
      fontSize: "18px",
      color: "rgba(242, 84, 45, 1) !important",
      textAlign: "center  !important",
      paddingTop: "4px",
    },
    ".ant-picker-calendar-date-value": {
      fontWeight: "600",
      fontSize: "20px",
      color: "rgba(86, 44, 44, 1) !important",
      textAlign: "center  !important",
      paddingTop: "4px",
      "@media (max-width: 765px)": {
        paddingTop: "unset",
      },
    },
  },
  ".ant-picker-calendar-date": {
    border: " 1px solid rgba(223, 223, 223, 1) !important",
    borderRadius: "8px !important",
    height: "72px !important",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    margin: "6px !important",
    "@media (max-width: 1050px)": {
      height: "36px !important",
      width: "36px !important",
      fontSize: "14px",
      margin: "4px !important",
    },
  },
  ".ant-picker-cell": { margin: "4px !important" },
  ".ant-picker-cell-inner": {
    borderRadius: "8px !important",
    backgroundColor: "#f0f0f0",
    color: "#bfbfbf",
    background: "rgba(245, 245, 245, 1)",
    border: " 1px solid rgba(223, 223, 223, 1) !important",
    cursor: "not-allowed",
    padding: "4px",
    width: "100%",
    height: "72px !important",
    textAlign: "center",
    "@media (max-width: 765px)": {
      height: "36px !important",
    },
    ".ant-picker-calendar-date-value": {
      fontWeight: "600",
      textAlign: "center",
      fontSize: "20px",
      "@media (max-width: 765px)": {
        fontSize: "14px",
      },
    },
    ".antd-calendar-text": {
      paddingTop: "8px",
      "@media (max-width: 765px)": {
        display: "none",
      },
    },
    "&::before": {
      border: "unset !important",
    },
  },
  ".ant-picker-cell-in-view": {
    ".has-event": {
      border: " 1px solid rgba(242, 84, 45, 1) !important",
      background: "rgba(255, 244, 241, 1) !important",
    },
    ".ant-picker-cell-inner": {
      color: "rgba(153, 153, 153, 1)",
      backgroundColor: "#f0f0f0",
      background: "white",
      cursor: "pointer",
    },
  },
  ".ant-picker-calendar-date-content": {
    fontWeight: "400",
    fontSize: "18px",
    color: "rgba(170, 170, 170, 1) !important",
    textAlign: "center  !important",
    paddingTop: "4px",
  },
});

const StyledCustomeHeader = styled("div", {
  display: "flex",
  fontWeight: "500",
  fontSize: "20px",
  color: "rgba(86, 44, 44, 1)",
  justifyContent: "center",
  gap: "12px",
  padding: "12px 0 16px",
});

type TBlocTwoProps = {
  title: string;
  subTitle: string;
  data: any;
};

export const BlocTwoSubTitle = ({ title, subTitle, data }: TBlocTwoProps) => {
  const [form] = useForm();
  const [editorContent, setEditorContent] = useState(
    "<div><h3>heading</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p></div>"
  );

  const events: any = {
    "2025-01-18": "Meeting with client", // Ngày và mô tả sự kiện
    "2025-01-20": "Team lunch",
  };

  const handleEditorChange = (content: any) => {
    setEditorContent(content);
  };

  const customLocale = {
    lang: {
      locale: "en",
      week: "Week",
      today: "Today",
      shortWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // Các tên ngày tùy chỉnh
      month: "Month",
      year: "Year",
    },
    timePickerLocale: {},
  };

  const customeHeader = ({ value, onChange }: any) => {
    const month = value.month();
    const year = value.year();
    const monthName = moment().month(month).format("MMMM");

    const handlePrevMonth = () => {
      const newValue = value.clone().subtract(1, "month");
      onChange(newValue);
    };

    const handleNextMonth = () => {
      const newValue = value.clone().add(1, "month");
      onChange(newValue);
    };

    return (
      <StyledCustomeHeader>
        <Icon
          component={IconArrowLeft}
          style={{ cursor: "pointer" }}
          onClick={() => handlePrevMonth()}
        />
        {monthName} {year}
        <Icon
          component={IconArrowRight}
          style={{ cursor: "pointer" }}
          onClick={() => handleNextMonth()}
        />
      </StyledCustomeHeader>
    );
  };

  const dateFullCellRender = (date: moment.Moment) => {
    const dateString = date.format("YYYY-MM-DD");
    const hasEvent = events[dateString] ? "has-event" : "";
    return (
      <div
        className={` ${hasEvent} ant-picker-cell-inner`}
        style={{ position: "relative" }}
      >
        <div className="ant-picker-calendar-date-value">{date.date()}</div>

        {events[dateString] ? (
          <div className="antd-calendar-text">Libre</div>
        ) : (
          <div className="antd-calendar-text">Busy</div>
        )}
      </div>
    );
  };

  return (
    <StyledBlocWapper>
      <Title title={title} subTitle={subTitle} />
      <CustomerCalendar
        headerRender={customeHeader}
        mode={"month"}
        locale={customLocale as any}
        dateFullCellRender={dateFullCellRender}
      />
      <StyledForm form={form}>
        <Form.Item
          name={data?.btn_1[0]}
          label={data?.btn_1[0]}
          rules={[
            {
              required: true,
              message: "This is a required field",
            },
          ]}
        >
          <Input placeholder={data?.btn_1[1]} className="input" />
        </Form.Item>
        <Form.Item
          name={data?.btn_2[0]}
          label={data?.btn_2[0]}
          rules={[
            {
              required: true,
              message: "This is a required field",
            },
          ]}
        >
          <Input placeholder={data?.btn_2[1]} />
        </Form.Item>
        <Form.Item name={"Message"} label={data?.btn_3}>
          <Editor
            apiKey="0alv44wcfq3y1fat8mlf5qq6q7pkfa2mhcr9wx9fp67zsqvd" // Optional, you can get it from TinyMCE
            value={editorContent}
            init={{
              height: 200,
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
        <Form.Item name={"Fichier:"} label="Fichier">
          <Icon component={IconAttachmentFile} /> Pièce jointe
        </Form.Item>
      </StyledForm>
      <StyledFormFooter>
        <StyledBtn onClick={() => form.resetFields()}>{data.btn_5}</StyledBtn>
        <StyledBtnSend
          onClick={() => {
            form.validateFields().then((e) => console.log(e));
          }}
        >
          {data.btn_6}
          <Icon component={IconSend} />
        </StyledBtnSend>
      </StyledFormFooter>
    </StyledBlocWapper>
  );
};
