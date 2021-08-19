import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button
        title='Return to Categories'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default MealDetailScreen
