import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const ProductButton = () => {
  return (
    <Button
      w="200px"
      h="200px"
      borderRadius="10px"
      backgroundColor="#F5C700"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
    >
      <Image src={"/images/mesa.png"} alt="Product Image" mb={2} />
      <Text fontSize={24} fontWeight="bold" textAlign="center" color={"black"} fontFamily={"Stem-Bold"}>
        Jogos
      </Text>
    </Button>
  );
};

export default ProductButton;
