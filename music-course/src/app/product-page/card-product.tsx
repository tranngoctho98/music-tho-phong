import { CardMedia, Grid } from "@mui/material";
import styled from "styled-components";

export interface CardProductProps {
  id: number;
  image: string;
  nameProduct: string;
  priceProduct: string;
  priceProductOld: string;
}

const CardProduct = (props: CardProductProps) => {
  return (
    <CardProductStyled item container direction="column">
      <Grid item className="image">
        <CardMedia
          component="img"
          height="250"
          image={`${props.image}`}
          alt="Live from space album cover"
        />
      </Grid>
      <Grid
        item
        className="info-product"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="name-product">
          {props.nameProduct}
        </Grid>
        <Grid item className="price-new">
          {props.priceProduct}VND
        </Grid>
        <Grid item className="price-old">
          {props.priceProductOld}VND
        </Grid>
      </Grid>
    </CardProductStyled>
  );
};

const CardProductStyled = styled(Grid)`
  min-height: 400px;
  background-color: white;
  border-radius: 12px px;
  box-shadow: #ccc 0px 2px 5px 0px;
  padding: 10px;
  .image {
    height: 300px;
  }
  .info-product {
    .name-product {
      min-height: 40px;
    }

    .price-new {
      color: #dd0000;
      font-weight: bold;
      font-size: 14px;
    }

    .price-old {
      text-decoration-line: line-through;
      color: #999999;
      font-size: 12px;
    }
  }
`;

export default CardProduct;
