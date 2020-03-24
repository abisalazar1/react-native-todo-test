import React, { Component } from 'react';

import { View, FlatList } from 'react-native';

import { TodoContext } from '../../contexts/TodoContext';

import { ListItem, Input, Button, Icon } from 'react-native-elements';

const todo = React.createRef();

export default class TodoListScreen extends Component {
  static contextType = TodoContext;
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    };
  }

  onChangeText(value) {
    this.setState({
      ...this.state,
      todo: value
    });
  }
  goToListOnly() {
    this.props.navigation.navigate('Todo List Only')
  }

  add() {
    if (!this.state.todo) {
      return;
    }
    this.context.add({
      id: `${Math.random()}`,
      title: this.state.todo
    });
    this.setState({
      ...this.state,
      todo: ''
    });
    todo.current.clear();
  }
  remove(id) {
    this.context.remove(id);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Press me" onPress={() => this.goToListOnly()} />
        <View >
          <Input
            ref={todo}
            style={{
            }}
            placeholder='Add Todo'
            onChangeText={value => this.onChangeText(value)}
            leftIcon={
              <Icon
                name='favorite'
                size={25}
                color='black'
              />
            }
          />
          <Button title="Add" onPress={() => this.add()} />
        </View>
        <FlatList
          data={this.context.todos}
          renderItem={({ item }) =>
            <ListItem
              key={item.id}
              title={item.title}
              bottomDivider
              rightIcon={
                <Icon
                  onPress={() => this.remove(item.id)}
                  name='delete'
                  size={25}
                  color='black'
                />
              }
            />
          }
          keyExtractor={({ id }) => id}
        />
      </View>
    );
  }
}

