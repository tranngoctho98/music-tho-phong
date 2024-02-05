import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Grid, Link } from "@mui/material";
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
      <Grid container direction="row" p={3}>
        <Grid item xs={2} xl={2} paddingLeft={5} paddingTop={2}>
          <img
            className="logo-music"
            src={logoMusic}
            alt="logo-music"
            loading="lazy"
          />
        </Grid>
        <Grid item container direction="column" xs={5} xl={5} rowGap={0.5}>
          <Grid item>
            <h3 className="heading">{contact.headingName}</h3>
          </Grid>
          <Grid item>Địa chỉ: {" " + contact.address}</Grid>
          <Grid item>
            Hotline:
            <span style={{ color: "#ff99cc" }}>
              {" " + contact.numberPhone + " - " + contact.numberPhoneOther}
            </span>
          </Grid>
          <Grid item>Email: {" " + contact.email}</Grid>
          <Grid item container direction="row" py={3}>
            <Grid item xs={6} md={3}>
              <Link
                className="item-child"
                color="inherit"
                href={contact.facebook}
              >
                <FacebookIcon sx={{ marginRight: 1 }} /> Facebook
              </Link>
            </Grid>
            <Grid item xs={6} md={3}>
              <Link
                className="item-child"
                color="inherit"
                href={contact.youtube}
              >
                <YouTubeIcon sx={{ marginRight: 1 }} /> Youtube
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} xl={5} p={2}>
          <img
            className="dan-piano"
            src={danPiano}
            alt="logo-music"
            loading="lazy"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className="develop"
        justifyContent="center"
      >
        <p>{"@" + new Date().getFullYear() + " - " + contact.endFooter}</p> {}
      </Grid>
    </FooterStyled>
  );
};

const FooterStyled = styled(Box)`
  &&.location-footer {
    .logo-music,
    .dan-piano {
      max-width: 100%;
    }
    color: #fff;
    .develop {
      border-top: 1px solid #ffffff;
    }
    .item-child {
      font-size: 14px;
      display: inline-flex;
      align-items: center;
    }
    .item-child:hover {
      text-decoration: underline;
    }
    a {
      outline: none !important;
      text-decoration: none;
    }
  }
`;

export default FooterComponent;
