import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import contact from "../../assets/data-jsons/contact.json";

const ContactComponent = () => {
  return (
    <ContactStyled className="widget-wrap populated">
      <Box className="widget-heading-1">
        <Box className="widget-container">
          <Typography
            className="heading-title"
            component="a"
            href={"tel:" + contact.numberPhone}
          >
            Call Us: {contact.numberPhone}
          </Typography>
        </Box>
      </Box>
      <Box className="widget-heading-2" display={{ xs: "none", xl: "block" }}>
        <Box className="widget-container">
          <Typography
            className="heading-title"
            component="a"
            href={"tel:" + contact.numberPhone}
          >
            CONTACT TODAY
          </Typography>
        </Box>
      </Box>
    </ContactStyled>
  );
};

const ContactStyled = styled(Box)`
  &&.widget-wrap {
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
  }

  &&.populated {
    margin: -5px 0;
    --e-column-margin-right: 0px;
    --e-column-margin-left: 0px;
    padding: 10px;
  }

  .widget-heading-1 {
    width: auto;
    max-width: 100%;
    .widget-container {
      padding: 8px 60px 8px 20px;
      background-color: #fff;
      border-radius: 100px;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s, transform var(--e-transform-transition-duration, 0.4s);

      .heading-title {
        padding: 0;
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: #03124e;
        box-shadow: none;
        text-decoration: none;
      }
    }
  }
  .widget-heading-2 {
    width: auto;
    max-width: 100%;
    .widget-container {
      margin: 0 0 0 -35px;
      padding: 8px 20px;
      background-color: #e52323;
      border-radius: 100px;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s, transform var(--e-transform-transition-duration, 0.4s);

      .heading-title {
        color: #fff;
        font-size: 14px;
        box-shadow: none;
        text-decoration: none;
      }
    }
  }
`;

export default ContactComponent;
