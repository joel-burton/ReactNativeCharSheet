
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';




class CharacterSheet extends Component {
    render() {
        return (
        <View style={styles.container}>


            <TouchableHighlight
                style={styles.button}>
                <Text style={styles.text}>PUSH ME</Text>
            </TouchableHighlight>
        </View>
        );
    }
}

export default class App extends Component {
  render() {
    console.log('rendering App...');
    return (
        <Provider store={ {/* this needs to be resolved */} }>
            <CharacterSheet />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      color: 'white',
      fontSize: 32,
  },
  button: {
      backgroundColor: '#dad',
      height: 100,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12
  },
  buttonText: {
      color: 'white',
      fontSize: 16
  }
});
