import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text } from "../theme";
import colors from "../colors";

import Container from "./Container";
import CloseButton from "./CloseButton";
import { StackNavigationProps, Routes } from "./AppRoutes";

const SIZE = 80;

const ConfirmPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ConfirmPassword">) => {
  return (
    <Container
      footer={
        <Box justifyContent="center" alignItems="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box padding="xl" justifyContent="center" flex={1} alignItems="center">
        <Box
          marginBottom="m"
          width={80}
          height={80}
          style={{ borderRadius: SIZE / 2 }}
          backgroundColor="lightGreen"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Icon name="check" color={colors.primary} size={40} />
          </Box>
        </Box>
        <Box>
          <Text textAlign="center" variant="title1" marginBottom="s">
            Your password was successfully changed
          </Text>
          <Text textAlign="center" paddingBottom="m" color="body">
            Close this window and login again
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default ConfirmPassword;
