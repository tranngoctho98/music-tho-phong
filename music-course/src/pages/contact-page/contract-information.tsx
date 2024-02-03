import { Grid } from "@mui/material";
import styled from "styled-components";
import dataJson from "../../assets/data-jsons/contact.json";

const ContactInformation = () => {
  return (
    <ContactInformationStyled
      item
      id="contact-information"
      xs={12}
      direction="column"
    >
      <Grid
        item
        className="content-info"
        container
        direction="column"
        xs={12}
        rowSpacing={1}
      >
        <Grid item className="name-center">
          {dataJson.nameWebsite}
        </Grid>
        <Grid item>Địa chỉ : {dataJson.address}</Grid>
        <Grid item className="phone">
          Hotline:{" "}
          <span>
            {dataJson.numberPhone + " - " + dataJson.numberPhoneOther}{" "}
          </span>
        </Grid>
        <Grid item className="email">
          Gmail: <span>{dataJson.email}</span>
        </Grid>
        <Grid item className="fanpage">
          Fanpage : <a href={dataJson.facebook}>{dataJson.facebook}</a>
        </Grid>
        <Grid item>Hỗ trợ tư vấn miễn phí 24/7</Grid>
      </Grid>
      <Grid item className="image-info">
        <img
          className="image-contact"
          src={`${dataJson.image}`}
          alt="logo-music"
          loading="lazy"
        />
      </Grid>
    </ContactInformationStyled>
  );
};

const ContactInformationStyled = styled(Grid)`
  &&#contact-information {
    .content-info {
      .name-center {
        font-size: 18pt;
        color: #008000;
        margin-top: 20px;
        margin-bottom: 10px;
        font-family: inherit;
        font-weight: 600;
        line-height: 1.1;
      }
      .phone span {
        color: red;
      }
      .fanpage a {
        color: #008000;
      }
      margin-bottom: 30px;
    }
    .image-info {
      text-align: left;
      max-width: 100%;
      height: auto;

      img {
        height: auto;
        max-width: 100%;
        vertical-align: top;
      }
    }
  }
`;

export default ContactInformation;
