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
        <Text fontSize={50} fontFamily={"Stem-Bold"}>
          Bem vindo David,
        </Text>
        <Text fontSize={50} fontFamily={"Stem-regular"}>
          o que vamos fazer hoje?
        </Text>
        <Box>
          <Flex mt={12}>
            <ProductButton w="50%" h="300px"/>
            <ProductButton w="50%" h="300px"/>
          </Flex>
        </Box>
        <Box>
          <Flex mt={12}>
            <ProductButton w="50%" h="300px"/>
            <ProductButton w="50%" h="300px"/>
          </Flex>
        </Box>
        <Text fontSize={50} mt={12}  fontFamily={"Stem-Bold"}>
            Popular
        </Text>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
          </Flex>
        </Box>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
          </Flex>
        </Box>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
          </Flex>
        </Box>
        <Box>
          <Flex mt={12}>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
            <ProductButton w="33%" h="200px"/>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
