import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }: Props) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

interface Props {
  children: React.ReactNode;
  style?: Object;
}

export default Screen;
