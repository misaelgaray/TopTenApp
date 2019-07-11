/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import ListItem from './ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    place  : null,
    places : [
      {key : 1, label : 'Scarlet Johansson'}
    ]
  }

  placeNameHandler = (val) => {
      this.setState({
        place : {
          key : this.state.places.length + 1 ,
          label: val
        }
      });
  }

  placeSubmitHandler = () => {
      if(this.state.place){
        this.setState(prevState => {

          return {
            places: prevState.places.concat(prevState.place),
            place: null
          }
        });
      }
  }

  _renderItem = ({item, index, move, moveEnd, isActive})  => {
    return <ListItem
        item={item}
        index={index}
        move={move}
        moveEnd={moveEnd}
        isActive={isActive}/>
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Enter some text'
                     style={styles.placeInput}
                     value={this.state.place ? this.state.place.placeName : ''}
                     onChangeText={this.placeNameHandler} />
          <Button style={styles.placeButton} onPress={this.placeSubmitHandler} title="Add"/>
        </View>
        <View style={styles.listContainer}>
          <DraggableFlatList
            data={this.state.places}
            renderItem={this._renderItem}
            keyExtractor={(item,index) => item.key+'-item'}
            scrollPercent={5}
            onMoveEnd={({data}) => this.setState({places : data})}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#e5e6eb'
  },
  inputContainer : {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems : 'stretch',
    padding: 15
  }
});
