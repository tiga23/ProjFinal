import BottomButton from './components/BottomButton'
import Menu from './components/Menu'
import CategoryButton from './components/CategoryButton'
import { Inter } from 'next/font/google'
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Sidebar from './components/Sidebar';



export default function Home() {
  return (
    <>
    <Menu />
    <Sidebar/>
    {/*<Image src="/images/bg_inicio.jfif" backgroundSize={"cover"} h="80vh" w="100vw" alt="Logo" />*/}
    <BottomButton />
    </>
  )
}
