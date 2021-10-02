import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <Screen style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
  },
  headerContainer: {
    backgroundColor: "white",
    padding: 15,
  },
});
