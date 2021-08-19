import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import Colors from "../constants/colors"

//screens
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen"

//navigator to point to screens
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
    title: "MealsApp",
  }
)

//export navigator wrapped in an app container from react-navigation
export default createAppContainer(MealsNavigator)
