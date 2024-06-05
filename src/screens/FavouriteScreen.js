import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
// import { FavoriteContext } from "../../store/context/FavoriteContext";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummyData";
import { useSelector } from "react-redux";

const FavouriteScreen = () => {
  // const FavoriteMealsCtx = useContext(FavoriteContext);
  const FavoriteMealsIds = useSelector((state) => state.FavoriteMeals.ids);

  const FavoriteMeal = MEALS.filter((meal) =>
    FavoriteMealsIds.includes(meal.id)
  );

  // console.log(FavoriteMeal);

  if (FavoriteMeal.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>There are no favorites yet.</Text>
      </View>
    );
  }

  return <MealsList items={FavoriteMeal} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
