import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

// import { ActionCreator } from '../Actions/ActionCreator'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      color: 'white',
      fontSize: 32,
  },
  buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    //   borderWidth: 1,
    //   borderColor: 'white',
    //   borderStyle: 'solid',
  },
  button: {
      alignSelf: 'flex-start',
      backgroundColor: '#dad',
      height: 80,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
  },
  resetButton: {
      backgroundColor: '#f44',
      height: 60,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12
  },
  buttonText: {
      color: 'white',
      fontSize: 42
  },
  numDisplay: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    //   borderWidth: 1,
    //   borderColor: 'white',
    //   borderStyle: 'solid'
  },
  number: {
      color: 'white',
      fontSize: 120
  }
  });



class Counter extends Component {

    increase() {
        this.props.increment();
    }

    decrease() {
        this.props.decrement();
    }

    render() {
        return (

        <View style={styles.container}>
            <View style={styles.numDisplay}>
                <Text style={styles.number}> {this.props.count} </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                    onPress={ () => { this.increase() } }
                    style={styles.button}>
                    <Text style={styles.buttonText}> + </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={ () => { this.decrease() } }
                    style={styles.button}>
                    <Text style={styles.buttonText}> - </Text>
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}


module.exports = Counter;
