import { Button, Flex, Image, Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Flex alignItems="center">
      <Image src="/images/logo.gif" alt="Logo" boxSize={200} ml={10} mt={10} />
      <Image src="/images/flag.png" alt="Flag" boxSize={20} w={"90"} ml={10} mt={10}/>
    </Flex>
  );
};

export default Menu;