import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/waitScreen/splash';
import LoginScreen from './src/login/LoginScreen';
import RegisterScreen from './src/login/RegisterScreen';
import Home from './src/screens/Home';
import NotificationScreen from './src/screens/NotificationScreen';
import SearchProduct from './src/screens/SearchProduct';
import AccountScreen from './src/screens/AccountScreen';
import Splash1 from './src/waitScreen/splash1';
import ProductDetail from './src/screens/ProductDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="splash1" component={Splash1} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={SearchProduct} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Detail" component={ProductDetail} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
