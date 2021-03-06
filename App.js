import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './assets/src/OnBoardingScreen';
import HomeScreen from '../onBoard/assets/src/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigator from './assets/navigation/BottomNavigation';
import DetailsScreen from './assets/views/screens/DetailsScreen';
import customerInfo from './assets/views/screens/customerInfo';

const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } 
    else 
    {
      setIsAppFirstLaunched(false);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppFirstLaunched && (
              <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen}/>
            )}
          <Stack.Screen name='Home' component={BottomNavigator} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
          <Stack.Screen name='customerInfo' component={customerInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;