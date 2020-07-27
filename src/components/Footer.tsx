import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Text } from "../theme";

import SocialLogin from "./SocialLogin";
import Button from "./Button";

interface FooterProps {
  onPress: () => void;
  text: string;
  subText: string;
}

const Footer = ({ onPress, text, subText }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button onPress={() => {}} variant="transparent">
          <Box flexDirection="row" alignItems="center">
            <Text color="white" textAlign="center">
              {text}
            </Text>
            <TouchableWithoutFeedback onPress={onPress}>
              <Text color="primary" textAlign="center" paddingLeft="s">
                {subText}
              </Text>
            </TouchableWithoutFeedback>
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default Footer;
