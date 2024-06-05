import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealItemCard from "./MealItemCard";
const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItemCard {...mealProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
