import { Grid } from "@mui/material";
import ContactFormRegister from "./contact-form-register";
import ContactInformation from "./contract-information";
import ViewScreen from "../../components/view-screen/view-screen";

const ContactPage = () => {
  return (
    <ViewScreen title="Liên hệ">
      <Grid container>
        <Grid item xs={12} paddingInline={2}>
          <ContactInformation />
        </Grid>
        <Grid item xs={12} paddingInline={2}>
          <ContactFormRegister />
        </Grid>
      </Grid>
    </ViewScreen>
  );
};

export default ContactPage;
