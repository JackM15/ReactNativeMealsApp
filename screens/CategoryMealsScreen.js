import React from "react"
import { StyleSheet, FlatList, View, Text } from "react-native"

import MealItem from "../components/MealItem"
import { CATEGORIES, MEALS } from "../data/dummy-data"

const CategoryMealsScreen = ({ navigation }) => {
  //get param from pops
  const catId = navigation.getParam("categoryId")

  //find out which meals have the categoryID
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  )

  //Item to render in the flatlist
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: itemData.item.id },
          })
        }}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "90%", paddingTop: 10 }}
      />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId")
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  //set component title on the bar
  return {
    title: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default CategoryMealsScreen
