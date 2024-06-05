import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import ItemDetailCard from "../components/ItemDetailCard";
import { MEALS } from "../data/dummyData";
import SubTitle from "../components/ItemDetail/SubTitle";
import List from "../components/ItemDetail/List";
import IconButton from "../components/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/redux/FavoriteReducer";
// import { FavoriteContext } from "../../store/context/FavoriteContext";

const ItemDetailsScreen = ({ route, navigation }) => {
  // const FavoriteMealCtx = useContext(FavoriteContext);
  const FavoriteMealIds = useSelector((state) => state.FavoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const isFavoriteMeal = FavoriteMealCtx.ids.includes(mealId);

  const isFavoriteMeal = FavoriteMealIds.includes(mealId);

  const headerButtonPressHandler = () => {
    if (isFavoriteMeal) {
      // FavoriteMealCtx.removeFavorite(mealId);
      console.log("bananas");
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // FavoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        122;
        return (
          <IconButton
            icon={isFavoriteMeal ? "heart" : "heart-outline"}
            color="white"
            size={30}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

        <Text style={styles.text}>{selectedMeal.title}</Text>
        <ItemDetailCard
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailsText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <List data={selectedMeal.ingredients} />

            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  text: {
    fontSize: 24,
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
