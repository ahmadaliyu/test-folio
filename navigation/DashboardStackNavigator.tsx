import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import DetailScreen from "../screens/dashboard/DetailScreen";
import { DashboardStackParamList } from "../types";

const Stack = createNativeStackNavigator<DashboardStackParamList>();

export default function DashboardStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ title: "Dashboard", headerShown: false }}
      />

      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: "DetailScreen", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
