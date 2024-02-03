import { Grid } from "@mui/material";
import ContactFormRegister from "./contact-form-register";
import ContactInformation from "./contract-information";
import ViewScreen from "../../components/view-screen/view-screen";

const ContactPage = () => {
  return (
    <ViewScreen title="Liên hệ">
      <Grid container>
        <Grid item xs={12} sm={6} md={4} paddingInline={2}>
          <ContactFormRegister />
        </Grid>
        <Grid item xs paddingInline={2}>
          <ContactInformation />
        </Grid>
      </Grid>
    </ViewScreen>
  );
};

export default ContactPage;
