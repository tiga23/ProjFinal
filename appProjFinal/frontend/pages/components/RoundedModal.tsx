import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";

const RoundedModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    // Do some async operation

    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 2000);
  };

  return (
    <>

      <Button      
        backgroundColor="#F5C700"
        color="white"
        position="fixed"
        bottom={10}
        right={10}
        zIndex={999}>oiissssssssssii</Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          borderRadius="100%"
          padding={10}
          h={"600"}
          
          backgroundColor="white"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
        >
          <ModalHeader display="none" />
          <ModalBody>
            <Flex direction="column" alignItems="center" justifyContent="center">
              <Text fontSize={20} fontWeight="bold" textAlign="center" marginBottom={4}>
                Sucesso!
              </Text>
              <Text fontSize={16} textAlign="center" marginBottom={6}>
              Informamos que a reserva do produto foi completada, pode dirigir-se a 
              </Text>
              <Button
                isLoading={isLoading}
                loadingText="Loading"
                spinnerPlacement="end"
                backgroundColor="#F5C700"
                color="white"
                borderRadius="full"
                fontWeight="bold"
                _hover={{ backgroundColor: "#f2b807" }}
                _active={{ backgroundColor: "#F5C700" }}
                onClick={handleButtonClick}
              >
                Sair
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter display="none" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default RoundedModal;
