import styled from "styled-components";
import img from "../../assets/images/404.png";

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled className="wrap">
      <div className="logo">
        <img src={img} alt="404" />
        <p>
          <a href="/">Go back to Home</a>
        </p>
      </div>
    </NotFoundPageStyled>
  );
};

const NotFoundPageStyled = styled.div`
  &&.wrap {
    width: 1000px;
    margin: 0 auto;

    .logo {
      width: 430px;
      position: absolute;
      top: 25%;
      left: 35%;
    }
    p a {
      color: #eee;
      font-size: 13px;
      margin-left: 30px;
      padding: 5px;
      background: #ff3366;
      text-decoration: none;
      -webkit-border-radius: 0.3em;
      -moz-border-radius: 0.3em;
      border-radius: 0.3em;
    }
    p a:hover {
      color: #fff;
    }
  }
`;

export default NotFoundPage;
