import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import { ActionCreator } from '../Actions/ActionCreator'
import Counter from '../Components/Counter';


// CharacterSheet is the main app container
// from which actions will be dispatched via mapDispatchToProps
class CharacterSheet extends Component {
    render() {
        return (
            <Counter {...this.props} />
        );
    }


    // addOne() {
    //     this.props.incrementCount();
    // }
    //
    // zero() {
    //     this.props.resetCount();
    // }
    //
    // render() {
    //     return (
    //         // <Login {...this.props}/>
    //     <View style={styles.container}>
    //         <View>
    //             <Text style={styles.number}> {this.props.count} </Text>
    //         </View>
    //         <TouchableHighlight
    //             onPress={ () => { this.addOne() } }
    //             style={styles.button}>
    //             <Text style={styles.text}>PUSH ME</Text>
    //         </TouchableHighlight>
    //         <TouchableHighlight
    //             onPress={ () => { this.zero() } }
    //             style={styles.resetButton}>
    //             <Text style={styles.buttonText}>RESET</Text>
    //         </TouchableHighlight>
    //     </View>
    //     );
    // }
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
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12
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
      fontSize: 28
  },
  number: {
      color: 'white',
      fontSize: 120
  }

});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreator, dispatch);
}


export default connect((state) => { return {
        count: state.count
    }
}, mapDispatchToProps )(CharacterSheet);
