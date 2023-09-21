import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens";

const Stack = createNativeStackNavigator();

function SearchStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        /* header: () => (
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Button onPress={() => navigation.goBack()} title="Go Back" />
              <Header title={route.name} />
            </View>
          ), */
      })}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      {/* <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
}

export default SearchStackNavigator;
