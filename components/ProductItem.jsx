import { Container, Image, Td, Tr } from "@chakra-ui/react";
import propTypes from "prop-types";
export default function ProductItem(props) {
  return (
    <Tr>
      <Td>{props.name}</Td>
      <Td>
        <Container w={"150px"}>
          <Image src={props.imgSrc} />
        </Container>
      </Td>
      <Td>{props.price}</Td>
      <Td>{props.stock}</Td>
    </Tr>
  );
}

ProductItem.propTypes = {
  name: propTypes.string,
  imgSrc: propTypes.string,
  price: propTypes.string,
  stock: propTypes.number,
};
