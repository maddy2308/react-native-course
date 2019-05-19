// Import library to help create a component
import React from 'react'
import {View, AppRegistry} from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'


// Create a component
const App = () => {

	return (
		<View>
			<Header headerText={'Albums'}/>
			<AlbumList/>
		</View>
	)
};


// Render component to the device
AppRegistry.registerComponent('albums', () => App);