import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryItemCard = ({ title, color, onPress }) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.cardItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        // onPress={() => navigation.navigate("MealsOverView")}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItemCard;

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    height: 150,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
