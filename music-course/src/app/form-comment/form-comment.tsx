import { Grid } from "@mui/material";
import styled from "styled-components";
import TextField from "../../components/form-inputs/text-field";
import Button from "../../components/buttons/button";
import CheckBox from "../../components/form-inputs/check-box";
import { useForm } from "react-hook-form";

const FormComment = () => {
  const { control } = useForm();
  return (
    <form>
      <FormCommentStyled container direction="column">
        <Grid item sx={{ fontSize: "24px" }}>
          Leave Comments
        </Grid>
        <Grid item paddingBottom={2}>
          <CheckBox
            propsCheckbox={{ size: "small" }}
            label=" Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi."
          />
        </Grid>
        <Grid item container direction="column" rowGap={1}>
          <Grid item>
            <Grid item className="require">
              Name*
            </Grid>
            <Grid item>
              <TextField
                placeholder="Name*"
                control={control}
                name="name"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item className="require">
              Email*
            </Grid>
            <Grid item>
              <TextField
                placeholder="Email*"
                control={control}
                name="email"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item> Website</Grid>
            <Grid item>
              <TextField
                placeholder="Website"
                control={control}
                name="website"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid item className="require">
              Comment
            </Grid>
            <Grid item>
              <TextField
                multiline
                rows={5}
                placeholder="message:"
                control={control}
                fullWidth
                name="comment"
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button>Post comment</Button>
          </Grid>
        </Grid>
      </FormCommentStyled>
    </form>
  );
};

const FormCommentStyled = styled(Grid)`
  margin-top: 30px;
  background: #f8f8f8;
  padding: 25px;
`;

export default FormComment;
