
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {applyMiddleware, combineReducers, compose} from 'redux';

import { store } from './src/Store/Store';
import CharacterSheet from './src/Containers/MainAppContainer';


export default class App extends Component {
  render() {
    console.log('rendering App...');
    return (
        <Provider store={ store }>
            <CharacterSheet />
        </Provider>
    );
  }
}
