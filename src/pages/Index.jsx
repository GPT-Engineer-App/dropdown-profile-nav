import React from "react";
import { Container, Menu, MenuButton, MenuList, MenuItem, Button, Text, MenuDivider, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Menu isOpen={isOpen}>
        <MenuButton as={IconButton} aria-label="Options" icon={<FaUserCircle />} onClick={onOpen} size="lg" variant="outline" position="absolute" top={4} right={4} />
        <MenuList>
          <Text px={4} py={2} fontWeight="bold">
            John Doe
          </Text>
          <Text px={4} py={1}>
            john.doe@example.com
          </Text>
          <MenuDivider />
          <MenuItem onClick={() => handleNavigate("/home")}>Home</MenuItem>
        </MenuList>
      </Menu>
      <Text fontSize="2xl">Welcome to Your Dashboard</Text>
    </Container>
  );
};

export default Index;
