import { Box, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import json from "../Data produk.json";
import GridView from "./GridView";
import ListView from "./ListView";
import ProductCart from "./ProdutCard";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Content() {
  const [isGridView, setGridView] = useState(false);
  return (
    <Box p={"1rem"}>
      <VStack>
        <Flex
          w="full"
          textAlign={"left"}
          justify={"space-between"}
          align={"center"}
          mb={"1rem"}
        >
          <Box>
            <Switch
              onChange={(e) => {
                setGridView(e.target.checked);
              }}
            />
          </Box>
          <SearchBar />
        </Flex>
        {isGridView ? <GridView data={json} /> : <ListView data={json} />}
        {/* <ListView data={json} /> */}
      </VStack>
    </Box>

    // <GridView data={json} />
  );
}
