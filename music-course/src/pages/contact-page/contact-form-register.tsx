import { Grid } from "@mui/material";
import styled from "styled-components";
import Button from "../../components/buttons/button";
import TextField from "../../components/form-inputs/text-field";

const ContactFormRegister = () => {
  return (
    <form>
      <ContactFormRegisterStyled
        className="contact-form-register"
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item className="title">
          ĐĂNG KÝ KHÓA HỌC NGAY HÔM NAY
        </Grid>
        <Grid
          item
          className="form-input"
          container
          direction="column"
          rowSpacing={2}
          xs={12}
        >
          <Grid item>
            <Grid item> Tên của bạn</Grid>
            <Grid item>
              <TextField />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item> Địa chỉ Email</Grid>
            <Grid item>
              <TextField />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item> Số điện thoại</Grid>
            <Grid item>
              <TextField />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item>Số lượng đăng ký </Grid>
            <Grid item>
              <TextField />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item> Khóa học muốn đăng ký</Grid>
            <Grid item>
              <TextField />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item> Thông điệp </Grid>
            <Grid item>
              <TextField multiline rows={5} />
            </Grid>
          </Grid>
          <Grid item>
            <Button>Gửi đi</Button>
          </Grid>
        </Grid>
      </ContactFormRegisterStyled>
    </form>
  );
};

const ContactFormRegisterStyled = styled(Grid)`
  &&.contact-form-register {
    padding: 10px;
    color: #000;
    background-color: #8bb7f9;

    .title {
      color: #f6ff00;
      text-align: center;
      font-weight: 700;
      font-style: normal;
      font-size: 22px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .form-input {
      font-size: 15px;
    }
  }
`;

export default ContactFormRegister;
