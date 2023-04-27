import { Flex, Box, Text, Image } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Flex
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      w="300px"
      bg="gray.100"
      flexDirection="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
        <Image src="/images/logo.gif" alt="Photo" boxSize="100px" position="absolute" top={0} mt={12}  />
        <Box p="4" textAlign="left" position="absolute" top={180} >
            <Text>ReservarReservarReservar</Text>
            <Text>Menu Item 2</Text>
            <Text>Reservar</Text>
        </Box>
    </Flex>
  );
};

export default Sidebar;
