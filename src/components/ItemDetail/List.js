import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listContainer}>
      <Text style={styles.listText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    backgroundColor: "#e2b497",
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listText: {
    textAlign: "center",
    color: "#351401",
  },
});
