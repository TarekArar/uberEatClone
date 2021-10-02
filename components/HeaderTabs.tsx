import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function HeaderTabs() {
  const tabs = [{ title: "Delivery" }, { title: "Pickup" }];
  const [activeTab, setActiveTab] = useState(0);

  const onPress = (index: number) => {
    setActiveTab(index);
  };
  return (
    <View style={styles.container}>
      {tabs.map(({ title }, index) => (
        <HeaderButton
          title={title}
          onPress={() => onPress(index)}
          isActive={activeTab === index}
        />
      ))}
    </View>
  );
}

const HeaderButton = ({
  title,
  isActive = false,
  onPress,
}: headerButtonProps) => (
  <TouchableOpacity
    style={[styles.headerButton, isActive ? styles.active : null]}
    onPress={onPress}
  >
    <Text
      style={[styles.HeaderButtonText, isActive ? styles.activeText : null]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  headerButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  HeaderButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
  active: {
    backgroundColor: "black",
  },
  activeText: {
    color: "white",
  },
});

interface headerButtonProps {
  title: string;
  isActive?: Boolean;
  onPress: () => void;
}
