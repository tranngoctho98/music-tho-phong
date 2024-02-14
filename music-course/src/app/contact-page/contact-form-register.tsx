import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/buttons/button";
import SelectField from "../../components/form-inputs/select-field";
import TextField from "../../components/form-inputs/text-field";
import { listCourseOptions } from "../../constants/defaults";
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPALTE_ID,
} from "../../emails/key";
import ConfirmDialog from "../../components/confirm-dialog/ConfirmDialog";

interface ContactModel {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  registerNumber?: string;
  course?: string;
  note?: string;
}

const ContactFormRegister = () => {
  const [open, setOpen] = useState(false);
  const { control, getValues, setError, clearErrors } = useForm<ContactModel>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      clearErrors();
      const { fullName, email, phoneNumber, course } = getValues();
      if (!fullName || !email || !email || !email) {
        if (!fullName) {
          setError("fullName", {
            type: "required",
            message: "Tên của bạn không được để trống",
          });
        }
        if (!email) {
          setError("email", {
            type: "required",
            message: "Email không được để trống",
          });
        }
        if (!phoneNumber) {
          setError("phoneNumber", {
            type: "required",
            message: "Số điện thoại không được để trống",
          });
        }
        if (!course) {
          setError("course", {
            type: "required",
            message: "Khóa học không được để trống",
          });
        }
        return;
      }

      e.preventDefault();
      emailjs
        .send(
          EMAIL_SERVICE_ID,
          EMAIL_TEMPALTE_ID,
          {
            ...getValues(),
            course: listCourseOptions.find((item) => item.value === course)
              ?.label,
          },
          {
            publicKey: EMAIL_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            handleClickOpen();
          },
          (error) => {
            handleClickOpen();
          }
        );
    },
    [clearErrors, getValues, setError]
  );

  return (
    <>
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
              <Grid item className="require">
                Tên của bạn
              </Grid>
              <Grid item>
                <TextField control={control} name="fullName" fullWidth />
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid item className="require">
                Địa chỉ Email
              </Grid>
              <Grid item>
                <TextField
                  control={control}
                  name="email"
                  fullWidth
                  type="email"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid item className="require">
                Số điện thoại
              </Grid>
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
              <Grid item className="require">
                Khóa học muốn đăng ký
              </Grid>
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
              <Grid item className="require">
                Khóa học muốn đăng ký
              </Grid>
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
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Đã đăng ký thành công
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
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
