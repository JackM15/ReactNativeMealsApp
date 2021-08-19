import React from "react"
import { Button, StyleSheet, Text, View, Platform } from "react-native"

import { CATEGORIES } from "../data/dummy-data"
import Colors from "../constants/colors"

const CategoryMealsScreen = ({ navigation }) => {
  //get param from pops
  const catId = navigation.getParam("categoryId")
  //find it from our data
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate("MealDetail")}
      />
      <Button title='Go Back' onPress={() => navigation.pop()} />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId")
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  //set component title on the bar
  return {
    title: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
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
