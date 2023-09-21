import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, AllGifsTitle } from "../screens";

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllGifsTitle" component={AllGifsTitle} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
