import { Button, Image, Text } from "@chakra-ui/react";

const ProductButton = (props) => {
  return (
    <Button
     m={3}
      w={props.w}
      h={props.h}
      borderRadius="30px"
      backgroundColor="#EFEFEF"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
      _hover={{ backgroundColor: "#F5C700" }}
    >
      <Image src={"/images/mesa.png"} alt="Product Image" mb={2} />
      <Text
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        color={"black"}
        fontFamily={"Stem-Bold"}
      >
        Jogos
      </Text>
    </Button>
  );
};

export default ProductButton;
