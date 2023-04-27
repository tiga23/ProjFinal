import { Box } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      bg="#F8D43B"
      w="100%"
      px={4}
      py={2}
      position="fixed"
      top={0}
      zIndex={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="300px"
      backgroundSize="cover"
      backgroundPosition="center 25%"
      backgroundAttachment="relative"
      backgroundImage={'url("/images/mesa.png")'}
    ></Box>
  );
};

export default Banner;
