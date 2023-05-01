import BottomButton from './components/BottomButton'
import Link from 'next/link';
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
    <Image src="/images/bg_inicio.jfif" backgroundSize={"cover"} h="80vh" w="100vw" alt="Logo" />
    <Link href="/list_products">
      <BottomButton />
    </Link>
    </>
  )
}
