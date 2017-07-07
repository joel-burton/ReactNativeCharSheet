import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../Actions';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    incrementCounter() {
        this.setState({count: this.state.count+1});
    }

    addCount() {
        this.props.addCount();
    }

    render() {
        <View style={styles.container}>
            <Text style={styles.text}>Test Counter: {this.state.count}</Text>
            <TouchableHighlight onPress={this.addCount()}>
                <Text>INCREASE COUNTER</Text>
            </TouchableHighlight>
        </View>
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
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
      fontSize: 24,
  }
});



export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);
