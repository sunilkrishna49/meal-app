import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealsList from "../components/MealList/MealsList";

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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverView;

const styles = StyleSheet.create({});
