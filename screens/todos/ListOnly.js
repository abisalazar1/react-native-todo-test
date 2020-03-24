import React, { Component } from 'react';

import { View, FlatList } from 'react-native';

import { TodoContext } from '../../contexts/TodoContext';

import { ListItem, Button } from 'react-native-elements';


export default class TodoCreateScreen extends Component {

  static contextType = TodoContext;

  goBack() {
    this.props.navigation.navigate('Todo List')
  }
  render() {
    return (
      <View >
        <Button title="Go Back" onPress={() => this.goBack()}></Button>
        <FlatList
          data={this.context.todos}
          renderItem={({ item }) =>
            <ListItem
              key={item.id}
              title={item.title}
              bottomDivider
            />
          }
          keyExtractor={({ id }) => id}
        />
      </View>
    );
  }
}