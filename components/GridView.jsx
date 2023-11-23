import { Grid, GridItem } from "@chakra-ui/react";
import ProductCart from "./ProdutCard";
import propTypes from "prop-types";

export default function GridView(props) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {props.data.data.map((product, index) => {
        return (
          <GridItem>
            <ProductCart
              imgSrc={product.primary_image.original}
              name={product.name}
              stock={product.stock}
              price={product.price.text_idr}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}

GridView.propTypes = {
  data: propTypes.object,
};
