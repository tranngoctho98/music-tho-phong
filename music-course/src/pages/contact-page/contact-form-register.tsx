import { Grid } from "@mui/material";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/buttons/button";
import SelectField from "../../components/form-inputs/select-field";
import TextField from "../../components/form-inputs/text-field";
import { listCourseOptions } from "../../constants/defaults";
import { sendEmailCallable } from "../../firebases/firebase";

const ContactFormRegister = () => {
  const { control } = useForm();

  const onSubmit = useCallback(async () => {
    // handleSendMail();
    try {
      const result = await sendEmailCallable({
        to: "tran1998tho@gmail.com",
        subject: "Test Email",
        text: "Hello!",
      });
      console.log(result.data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Error sending email. Check the console for details.");
    }
  }, []);

  return (
    <ContactFormRegisterStyled
      $imageButton="/images/contact/button-submit.png"
      $imageTitle="/images/contact/contact-title.png"
    >
      <Grid
        className="form-border"
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        padding={{ xs: 1, md: "35px" }}
      >
        <Grid
          item
          className="form-top"
          position={{ xs: "static", md: "absolute" }}
        >
          <Grid item className="form-title">
            <div className="title">ĐĂNG KÝ KHÓA HỌC</div>
          </Grid>
        </Grid>

        <Grid
          item
          className="form-content"
          container
          direction="row"
          gap={2}
          xs={12}
          justifyContent="center"
        >
          <Grid item xs={12} md={5}>
            <Grid item> Tên của bạn</Grid>
            <Grid item>
              <TextField control={control} name="fullName" fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid item> Địa chỉ Email</Grid>
            <Grid item>
              <TextField control={control} name="email" fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid item> Số điện thoại</Grid>
            <Grid item>
              <TextField control={control} name="phoneNumber" fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid item>Số lượng đăng ký </Grid>
            <Grid item>
              <TextField control={control} name="registerNumber" fullWidth />
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} display={{ xs: "block", md: "none" }}>
            <Grid item> Khóa học muốn đăng ký</Grid>
            <Grid item>
              <SelectField
                name="course"
                control={control}
                fullWidth
                options={listCourseOptions}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={5}>
            <Grid item> Ghi chú </Grid>
            <Grid item>
              <TextField
                control={control}
                multiline
                rows={5}
                name="note"
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} display={{ xs: "none", md: "block" }}>
            <Grid item> Khóa học muốn đăng ký</Grid>
            <Grid item>
              <SelectField
                name="course"
                control={control}
                fullWidth
                options={listCourseOptions}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Button className="button-submit" onClick={onSubmit}>
              Gửi thông tin
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ContactFormRegisterStyled>
  );
};

const ContactFormRegisterStyled = styled.form<{
  $imageTitle?: string;
  $imageButton?: string;
}>`
  && {
    background-color: #e2f3ff;
    padding: 40px 0 20px;
    position: relative;
    min-height: 400px;
    .form-border {
      min-height: 450px;
      position: relative;

      .form-top {
        width: 100%;
        top: -24px;
        text-align: center;
        left: -5px;

        .form-title {
          background: url(${(props) => props.$imageTitle}) left top no-repeat;
          margin: auto;
          overflow: hidden;
          width: 380px;
          padding: 23px 0;

          .title {
            color: #004b97;
            text-align: center;
            font-size: 28px;
            font-weight: 700;
            line-height: 110%;
            letter-spacing: -0.56px;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
        }
      }
      .form-content {
        font-size: 15px;
        padding-top: 50px;
      }
      .button-submit {
        background: url(${(props) => props.$imageButton}) left center no-repeat;
        background-size: 230px;
        width: 230px;
        height: 58px;
        border: none;
        text-indent: -9999px;
        margin: auto;
        display: inherit;
      }
      .button-submit:hover {
        opacity: 0.5;
      }
    }
  }
`;

export default ContactFormRegister;
