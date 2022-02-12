import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

import { Home, Search, Profile, BookDetails } from "./screens";


const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    "Rubik-Bold": require('./assets/fonts/Rubik-Bold.ttf'),
    "Rubik-Medium": require('./assets/fonts/Rubik-Medium.ttf'),
    "Rubik-Regular": require('./assets/fonts/Rubik-Regular.ttf'),
    "Rubik-Light": require('./assets/fonts/Rubik-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }



  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BookDetails" component={BookDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
