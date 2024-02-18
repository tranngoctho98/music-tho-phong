import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useMemo } from "react";
import { HTMLTypes } from "../../contants";

export type TagsModel = {
  text: string;
  url: string;
};

export interface LineTextModel {
  className?: string;
  htmlType?: string;
  text?: string;
  position?: string;
  width?: string;
  size?: string | "full" | "normal";
  url?: string;
  listText?: LineTextModel[];
}

const maxWidthImg = (size?: string | "full" | "normal"): string => {
  switch (size) {
    case "full":
      return "100%";
    case "normal":
      return "50%";
    default:
      return "80%";
  }
};

const ContentRenders = (props: LineTextModel) => {
  const renderComponent = useMemo(() => {
    switch (props.htmlType) {
      case HTMLTypes.UL:
        return (
          <ul className={props.className}>
            {props.listText?.map((value) => {
              if (value.htmlType === HTMLTypes.UL) {
                return <ContentRenders {...value} />;
              }
              return (
                <li className={value.className}>
                  <ContentRenders {...value} />
                </li>
              );
            })}
          </ul>
        );
      case HTMLTypes.H1:
        return <h1 className={props.className}>{props.text}</h1>;
      case HTMLTypes.H2:
        return <h2 className={props.className}>{props.text}</h2>;
      case HTMLTypes.IMG:
        return (
          <img
            className={props.className}
            src={`${props.text}`}
            alt="logo-music"
            loading="lazy"
            style={{
              maxWidth: maxWidthImg(props.size),
              display: "block",
              marginInline: "auto",
            }}
          />
        );
      case HTMLTypes.MANY_SPAN_TEXT:
        return (
          <>
            {props.listText?.map((value) => (
              <ContentRenders {...value} />
            ))}
          </>
        );
      case HTMLTypes.TAGS:
        return (
          <span className="tags">
            <span className="bold" style={{ fontSize: "14px" }}>
              <LocalOfferIcon sx={{ fontSize: "14px", paddingTop: "2px" }} />
              {"Tags: "}
            </span>
            {props.listText?.map((value, index) => {
              return (
                <a key={index} className={props.className} href={value.url}>
                  {value.text}
                </a>
              );
            })}
          </span>
        );
      default:
        return <span className={props.className}>{props.text + " "}</span>;
    }
  }, [props.className, props.htmlType, props.listText, props.size, props.text]);

  return <>{renderComponent}</>;
};

export default ContentRenders;
