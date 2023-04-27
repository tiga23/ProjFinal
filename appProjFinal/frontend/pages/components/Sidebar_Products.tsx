import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const Sidebar_Products = () => {
  return (
        <Box mt={8}>
          <Text
            textAlign={"left"}
            fontSize={20}
            color={"#989898"}
            fontFamily={"Stem-Light"}
          >
            Snooker
          </Text>
          <Box
            justifyContent="space-between"
            alignItems="center"
            w="90%"
            display={"flex"}
            mt={4}
          >
            <Image
              src="/images/mesa.png"
              alt="Photo"
              w={"170px"}
              display={"inline-block"}
            />
            <Button
              w="50px"
              h="40px"
              backgroundColor="#F5C700"
              color="white"
              fontFamily="Stem-Regular"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <AddIcon boxSize={5} color={"black"} />
            </Button>
          </Box>
        </Box>
  );
};

export default Sidebar_Products;
