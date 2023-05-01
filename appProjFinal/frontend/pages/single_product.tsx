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
      <Box>
        <Banner />
        <Box ml={10} mr={10} mt={10}>
          <Text fontSize={50} fontFamily={"Stem-Bold"}>
            Vamos reservar!
          </Text>
          <Text fontSize={50} fontFamily={"Stem-regular"}>
            Reservas disponiveis
          </Text>
          <Box>
            <Flex mt={10}>
              <ProductButton w="33%" h="300px" />
              <ProductButton w="33%" h="300px" />
              <ProductButton w="33%" h="300px" />
            </Flex>
          </Box>
          <Box>
            <Flex mt={10}>
              <ProductButton w="33%" h="300px" />
              <ProductButton w="33%" h="300px" />
              <ProductButton w="33%" h="300px" />
            </Flex>
          </Box>
          <Text fontSize={50} mt={10} fontFamily={"Stem-Regular"}>
            Reservas Indesponiveis
          </Text>
          <Box>
            <Flex mt={10}>
              <ProductButton w="33%" h="300px" />
              <ProductButton w="33%" h="300px" />
              <ProductButton w="33%" h="300px" />
            </Flex>
          </Box>
        </Box>
        <BotaoLargo />
      </Box>
    </>
  );
}
