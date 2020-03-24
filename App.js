import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  TodoListOnlyScreen from './screens/todos/ListOnly';
import  TodoListScreen from './screens/todos/List';

import TodoContextProvider from './contexts/TodoContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TodoContextProvider >
        <Stack.Navigator>
          <Stack.Screen name="Todo List" component={TodoListScreen} />
          <Stack.Screen name="Todo List Only" component={TodoListOnlyScreen} />
        </Stack.Navigator>
      </TodoContextProvider>
    </NavigationContainer>
  )
};