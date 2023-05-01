import BottomButton from "./components/BottomButton";
import Menu from "./components/Menu";
import { Inter } from "next/font/google";
import {
  Button,
  Flex,
  Image,
  Text,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ProductButton from "./components/ProductButton";
import Banner from "./components/Banner";
import BotaoLargo from "./components/BotaoLargo";
import RoundedModal from "./components/RoundedModal";

export default function Home() {
  return (
    <>
      <Menu />
      <Sidebar />
      <Box w={"65%"} ml={10} mt={10}>
        <Flex>
          <Text fontSize={50} fontFamily={"Stem-regular"}>
            Todos os produtos da categoria Jogos
          </Text>
        </Flex>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
          </Flex>
        </Box>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
          </Flex>
        </Box>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
          </Flex>
        </Box>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
            <ProductButton w="33%" h="200px" />
          </Flex>
        </Box>
        <Button
          w="230px"
          variant="solid"
          borderRadius={"40px"}
          backgroundColor="#043E70"
          color={"white"}
          p={9}
          fontSize={25}
          fontFamily={"Stem-Regular"}
          ml={10}
          mb={10}
          position="fixed"
          bottom={0}
          left={0}
        >
          Voltar
        </Button>
      </Box>
    </>
  );
}
