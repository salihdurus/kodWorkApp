import React from 'react';
import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Jobs from './pages/Jobs';
import FavoritedJobs from './pages/FavoritedJobs';
import Detail from './pages/Detail';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsScreen"
        component={Jobs}
        options={{
          title: 'Jobs',
          headerTintColor: '#e85554',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={Detail}
        options={({route}) => ({
          title: route.params.name,
          headerTintColor: '#e85554',
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Jobs"
          component={JobStack}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="FavoritedJobsScreen"
          component={FavoritedJobs}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Router;
