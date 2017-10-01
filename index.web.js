/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './app'

export default class DisplayMessage extends Component {
	render(){
		return (
			<App displayText='You are in a web browser'/>
		);
	}
}

AppRegistry.registerComponent('ExampleApp', () => DisplayMessage);
AppRegistry.runApplication('ExampleApp', {
  rootTag: window.document.getElementById('react-root')
});
