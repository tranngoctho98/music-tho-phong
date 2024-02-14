import { Grid } from "@mui/material";
import ContentRenders, {
  LineTextModel,
} from "../../components/content-renders/content-renders";
import styled from "styled-components";

interface ContentListProps {
  listContent: LineTextModel[];
}

const ContentList = (props: ContentListProps) => {
  return (
    <ContentListStyled id="content-list" container direction="column" p={1}>
      {props.listContent.map((value, index) => {
        return (
          <Grid key={index} item sx={{ textAlign: value.position || "left" }}>
            <ContentRenders key={index} {...value} />
          </Grid>
        );
      })}
    </ContentListStyled>
  );
};

const ContentListStyled = styled(Grid)`
  &&#content-list {
    .bold {
      font-weight: bold;
    }
    .underline {
      text-decoration: underline;
    }
    img {
      padding: 8px;
    }
    .italic {
      font-style: italic;
    }
    h1,
    h2 {
      margin-bottom: 0px;
    }
    ul {
      margin-top: 0px;
    }
    ul.clock {
      list-style-image: url("/images/watch.png");
    }
    .tags a {
      color: #999;
      text-decoration: none;
      font-size: 14px;
      &:hover {
        color: #1e73be;
      }
    }
    .border {
      border: 1px solid #eaeaea;
      padding: 10px;
    }
  }
`;

export default ContentList;
