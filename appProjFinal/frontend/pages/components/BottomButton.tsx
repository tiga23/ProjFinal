import { Button, Flex, Image, Text } from "@chakra-ui/react";

const BottomButton = () => {
  return (
    <Flex
      justify="center"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      h="20vh" // Set the height to 20vh
      p={0}
      bg="white"
      boxShadow="md"
    >
      <Button w="full" h="100%" variant="solid" backgroundColor="#043E70">
        <Flex align="center">
          <Image src="/images/logo.gif" alt="Logo" boxSize="200" mr={12} />
          <Flex flexDirection="column">
            <Text
              color={"white"}
              fontSize={30}
              fontFamily={"Stem-Light"}
              textTransform={"uppercase"}
              textAlign={"left"}
            >
              Touch to start
            </Text>
            <Text
              color={"white"}
              fontSize={50}
              fontFamily={"Stem-Regular"}
              textTransform={"uppercase"}
            >
              Toque para começar
            </Text>
          </Flex>
        </Flex>
      </Button>
    </Flex>
  );
};

export default BottomButton;
