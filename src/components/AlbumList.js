import React, {Component} from 'react'
import {View} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

// Create a component
class AlbumList extends Component {

	state = {albums: []};

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({albums: response.data}))
	}

	renderAlbums() {
		return this.state.albums.map(album =>
			<AlbumDetail key={album.title} album={album}/>);
	}

	render () {
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

const styles = {

};

// Make the component available to other components of the app
export default AlbumList;