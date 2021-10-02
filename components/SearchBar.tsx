import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        renderLeftButton={() => <Ionicons name="location-sharp" size={24} />}
        renderRightButton={() => (
          <View style={styles.rightButton}>
            <AntDesign name="clockcircle" size={13} />
            <Text style={styles.rightButtonText}>Search</Text>
          </View>
        )}
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "700",
    marginTop: 7,
  },
  rightButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  rightButtonText: {
    marginLeft: 5,
  },
});
