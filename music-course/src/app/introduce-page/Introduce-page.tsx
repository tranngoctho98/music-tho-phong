import { Box, Grid } from "@mui/material";
import ViewScreen from "../../components/view-screen/view-screen";
import IntroduceContent from "./introduce-content";
import dataContact from "../../assets/data-jsons/contact.json";

const IntroducePage = () => {
  return (
    <ViewScreen title="Giới thiệu">
      <>
        <Box paddingInline={1}>
          <IntroduceContent />
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems={"center"}
          sx={{ fontWeight: "600", fontSize: "18px" }}
          rowGap={0.5}
          paddingTop={1}
        >
          <Grid item sx={{ fontStyle: "italic" }}>
            {dataContact.solution}
          </Grid>
          <Grid item>{"Địa chỉ: " + dataContact.address}</Grid>
          <Grid item>{"HOTLINE: " + dataContact.numberPhone}</Grid>
          <Grid item>{"Email: " + dataContact.email}</Grid>
        </Grid>
      </>
    </ViewScreen>
  );
};

export default IntroducePage;
