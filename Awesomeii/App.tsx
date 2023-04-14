/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // 导航栏控制器
    <NavigationContainer>
      {
        <Stack.Navigator>
          {/* 首页内容 */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome my Homi'}}
          />

          {/* 所以页面都需要在这里申明 */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

// 这是首页内容
// 这里的'navigation'是固定的。
const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane', age: 12})}
    />
  );
};

// 个人信息的页面
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.age}'s profile</Text>;
};

export default App;
