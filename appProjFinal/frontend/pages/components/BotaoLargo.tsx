import { Button, Flex } from "@chakra-ui/react";

const FooterButton = () => {
  return (
    <Flex
      justify="left"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
    >
      <Button
        w="50%"
        h="10vh"
        borderRadius="0"
        bgColor="#043E70"
        color="white"
        fontSize="60px"
        fontFamily={"Stem-Bold"}
      >
        Voltar
      </Button>
      <Button
        w="50%"
        h="10vh"
        borderRadius="0"
        bgColor="#F8D43B"
        color="black"
        fontSize="60px"
        fontFamily={"Stem-Bold"}
      >
        Reservar
      </Button>
    </Flex>
  );
};

export default FooterButton;
