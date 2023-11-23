import { TableContainer, Thead, Tbody, Table, Tr, Th } from "@chakra-ui/react";
import propTypes from "prop-types";
import ProductItem from "./ProductItem";
export default function ListView(props) {
  return (
    // <TableContainer p={0}>
    <Table variant="simple" w={"full"} m="0">
      <Thead>
        <Tr>
          <Th>Nama</Th>
          <Th>Image</Th>
          <Th>Harga</Th>
          <Th>Stock</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.data.data.map((product, index) => {
          return (
            <ProductItem
              key={index}
              imgSrc={product.primary_image.original}
              name={product.name}
              stock={product.stock}
              price={product.price.text_idr}
            />
          );
        })}

        <ProductItem />
      </Tbody>
    </Table>
    // </TableContainer>
  );
}

ListView.propTypes = {
  data: propTypes.object,
};
