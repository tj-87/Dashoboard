import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile () {
    return (
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Thiago Silva</Text>
            <Text color="gray.300" fontSize="small">
              thiagott380@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Thiago Silva"
            src="https://github.com/tj-87.png"
          />
        </Flex>
    );
}