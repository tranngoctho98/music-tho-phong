import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Container } from "@mui/material";
import styled from "styled-components";
import contact from "../../assets/data-jsons/contact.json";
import danPiano from "../../assets/images/dan-piano.jpg";
import logoMusic from "../../assets/images/logo-not-background.png";
import theme from "../../theme/theme";

const FooterComponent = () => {
  return (
    <FooterStyled
      id="footer"
      className="location-footer"
      sx={{ background: theme.palette.primary.main }}
    >
      <Box className="footer-parent">
        <Container className="footer-child flex con con-full element-1">
          <img
            className="logo-music"
            src={logoMusic}
            alt="logo-music"
            loading="lazy"
            width={2550}
            height={2550}
          />
        </Container>
        <Container className="footer-child flex con con-full element-2">
          <h3 className="heading">{contact.headingName}</h3>
          <Box className="text-editor">
            <div className="container">
              <p>
                {"MST: "}
                <span style={{ color: "#ff99cc" }}>
                  <b>{contact.mst}</b>
                </span>
                <br />
                {"Địa chỉ: "}
                {contact.address}
                <br />
                {"Hotline: "}
                <span style={{ color: "#ff99cc" }}>
                  <b>{contact.numberPhone}</b>
                </span>
                <br />
                {"Email: "}
                {contact.email}
              </p>
            </div>
          </Box>
          <Box className="info-contact">
            <FacebookIcon />
            <InstagramIcon />
            <LanguageIcon />
            <TelegramIcon />
          </Box>
        </Container>
        <Container className="footer-child flex con con-full element-3">
          <img
            className="dan-piano"
            src={danPiano}
            alt="logo-music"
            loading="lazy"
          />
        </Container>
        <Container className="footer-child flex con con-full element-4"></Container>
        <Container className="footer-child flex con con-full element-5">
          <Box width={"100%"}>
            <p>{contact.endFooter}</p>
          </Box>
        </Container>
      </Box>
    </FooterStyled>
  );
};

const FooterStyled = styled(Box)`
  &&.location-footer {
    color: #fff;
    .footer-parent {
      flex-grow: 0;
      flex-shrink: 0;
      background-color: transparent;
      background-image: radial-gradient(
        at center center,
        var(--e-global-color-414ce26) 0%,
        #21366b 66%
      );
      display: flex;
      flex-direction: row;
      container-widget-width: initial;
      container-widget-height: 100%;
      container-widget-flex-grow: 1;
      container-widget-align-self: stretch;
      justify-content: center;
      gap: 0px 0px;
      flex-wrap: wrap;
      background-transition: 0.3s;
      padding-block-start: 50px;
      padding-block-end: 20px;
      padding-inline-start: 0px;
      padding-inline-end: 0px;
      margin-inline-end: auto;
      margin-inline-start: auto;
      max-width: min(100%, var(--width));

      .footer-child.flex {
        flex-direction: var(--flex-direction);
        flex: var(--flex-grow) var(--flex-shrink) var(--flex-basis);
      }
      .footer-child.con {
        align-self: flex-start;
        flex-grow: 0;
        flex-shrink: 0;
        container-max-width: 1140px;
      }
      .footer-child.con-full {
        text-align: var(--text-align);
        padding-block-start: var(
          --bc-padding-block-start,
          var(--padding-block-start)
        );
        padding-block-end: var(
          --bc-padding-block-end,
          var(--padding-block-end)
        );
      }

      .footer-child.element-1 {
        width: 10%;
        flex-direction: column;
        container-widget-width: calc(
          (1 - var(--container-widget-flex-grow)) * 100%
        );
        container-widget-height: initial;
        container-widget-flex-grow: 0;
        container-widget-align-self: initial;
        justify-content: center;
        align-items: center;
        background-transition: 0.3s;
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-block-start: 0px;
        padding-block-end: 0px;
        padding-inline-start: 0px;
        padding-inline-end: 0px;
        img {
          height: auto;
          max-width: 100%;
          border: none;
          border-radius: 0;
          box-shadow: none;
          vertical-align: middle;
          display: inline-block;
        }
      }

      .footer-child.element-2 {
        display: flex;
        flex-direction: column;
        container-widget-width: calc(
          (1 - var(--container-widget-flex-grow)) * 100%
        );
        container-widget-height: initial;
        container-widget-flex-grow: 0;
        container-widget-align-self: initial;
        justify-content: space-around;
        align-items: flex-start;
        gap: 10px 10px;
        background-transition: 0.3s;
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-block-start: 5px;
        padding-block-end: 5px;
        padding-inline-start: 5px;
        padding-inline-end: 5px;
        width: 40%;

        .heading {
          align-self: stretch;
          order: -99999;
          flex-grow: 1;
          flex-shrink: 0;
          text-align: justify;
          width: 100%;
          padding: 0;
          margin: 0;
        }

        .text-editor {
          align-self: flex-start;
          order: -99999;
          max-width: 100%;
          columns: 1;
          color: var(--e-global-color-45c5b65);
          font-family: "Nunito", Sans-serif;
          font-size: 18px;
          font-weight: 300;
          width: 100%;
          .container {
            margin: 0;
            padding: 0;
            height: 100%;
            p {
              margin-block-start: 0;
              margin-block-end: 0.9rem;
            }
          }
        }

        .info-contact {
          align-self: flex-start;
          order: -99999;
          width: 80%;
          border-transition: 0.3s;
          display: flex;
          flex-direction: row;
          container-widget-width: calc(
            (1 - var(--container-widget-flex-grow)) * 100%
          );
          container-widget-height: 100%;
          container-widget-flex-grow: 1;
          container-widget-align-self: stretch;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0px 0px;
          background-transition: 0.3s;
          border-style: none;
          margin-block-start: 0px;
          margin-block-end: 0px;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-block-start: 0px;
          padding-block-end: 0px;
          padding-inline-start: 0px;
          padding-inline-end: 0px;
        }
      }

      .footer-child.element-2.con {
        align-self: flex-start;
        flex-grow: 0;
        flex-shrink: 1;
      }

      .footer-child.element-3 {
        width: 30%;
        display: flex;
        flex-direction: column;
        container-widget-width: 100%;
        container-widget-height: initial;
        container-widget-flex-grow: 0;
        container-widget-align-self: initial;
        background-transition: 0.3s;
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-block-start: 0px;
        padding-block-end: 0px;
        padding-inline-start: 0px;
        padding-inline-end: 0px;
      }
      .footer-child.element-4 {
        width: 20%;
        display: flex;
        background-transition: 0.3s;
      }
      .footer-child.element-5 {
        width: 100%;
        max-width: 100%;
        display: flex;
        align-items: stretch;
        container-widget-width: calc(
          (1 - var(--container-widget-flex-grow)) * 100%
        );
        background-transition: 0.3s;
        margin-block-start: 30px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-block-start: 0px;
        padding-block-end: 0px;
        padding-inline-start: 0px;
        padding-inline-end: 0px;
        text-align: center;
        border-style: solid;
        border-width: 1px 0 0;
        border-color: var(--e-global-color-45c5b65);
        border-radius: 0;
      }
    }
  }
`;

export default FooterComponent;
