import {
  AbsoluteCenter,
  Box,
  Card,
  Container,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import propTypes from "prop-types";

export default function ProductCart(props) {
  return (
    <Card h={"340px"} p={"10px"} w={"300px"} bg={"white"}>
      <VStack align={"left"}>
        <Container w={"150px"} mb={"2rem"}>
          <Image src={props.imgSrc} />
        </Container>
        <Box h={"50px"}>
          <Text fontWeight={"bold"}>{props.price}</Text>
        </Box>
        <Box h={"50p    x"}>
          <Text noOfLines={"2"}>{props.name}</Text>
        </Box>
        <Box h={"50px"}>
          <Text>{props.stock}</Text>
        </Box>
      </VStack>
    </Card>
  );
}

ProductCart.propTypes = {
  name: propTypes.string,
  imgSrc: propTypes.string,
  price: propTypes.string,
  stock: propTypes.number,
};
