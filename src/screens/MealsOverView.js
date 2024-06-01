import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItemCard from "../components/MealItemCard";
const MealsOverView = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: displayCatTitle,
    });
  }, []);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const displayCatTitle = CATEGORIES.find(
    (catTitle) => catTitle.id === catId
  ).title;

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
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
