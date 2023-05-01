import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import Sidebar_Products from "./Sidebar_Products";

const Sidebar = () => {
  return (
    <Flex
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      w="30%"
      bg="gray.100"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      p={4}
    >
      <Box
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        mt={12}
        display="flex"
        flexDirection="column"
        flexWrap="wrap" 
      >
        <Image
          src="/images/logo.gif"
          alt="Photo"
          boxSize="100px"
          display={"inline-block"}
        />
        <Button
          w="230px"
          variant="solid"
          borderRadius={"20px"}
          backgroundColor="#043E70"
          color={"white"}
          fontSize={20}
          fontFamily={"Stem-Regular"}
          mt={4}
        >
          Sair
        </Button>

        <Box textAlign="left" fontSize={33} fontFamily="Stem-Bold" mt={12}>
          <Text>
            Reservar <br />
            Novamente
          </Text>
        </Box>
        <Sidebar_Products/>
        <Sidebar_Products/>
        <Sidebar_Products/>
        <Sidebar_Products/>
      </Box>
    </Flex>
  );
};

export default Sidebar;
