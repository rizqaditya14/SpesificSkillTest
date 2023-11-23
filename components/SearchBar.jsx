import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <InputGroup w={"30%"}>
      <Input />
      <InputRightElement>
        <MdOutlineSearch />
      </InputRightElement>
    </InputGroup>
  );
}
