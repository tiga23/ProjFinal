import BottomButton from './components/BottomButton'
import Menu from './components/Menu'
import { Inter } from 'next/font/google'
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Sidebar from './components/Sidebar';
import ProductButton from './components/ProductButton';
import Banner from './components/Banner';
import BotaoLargo from './components/BotaoLargo';
import RoundedModal from './components/RoundedModal';

export default function Home() {
  return (
    <>
    {/*<Menu />
    <Sidebar/>
  <ProductButton/>*/}
    {/*<Image src="/images/bg_inicio.jfif" backgroundSize={"cover"} h="80vh" w="100vw" alt="Logo" />
    <BottomButton />*/}
    <RoundedModal/>
    <BotaoLargo/>
    <Banner/>
    </>
  )
}
