import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

import { MEALS } from "../data/dummy-data"

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId")
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Return to Categories'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId")
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return {
    title: selectedMeal.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default MealDetailScreen
