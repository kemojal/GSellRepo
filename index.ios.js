
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
 TouchableWithoutFeedback,
 TouchableOpacity,
 TextInput
} from 'react-native';

import { Button, Header, SearchBar, ButtonGroup, Icon, SideMenu, List, ListItem  } from 'react-native-elements';
import MainScreen from './pages/ItemScreen'
import Modal from 'react-native-simple-modal';


export default class Gsell extends Component {

  constructor() {
  super()
  this.state = {
    selectedIndex: 2,
    isOpen: true,
    isModalVisible: false,
    open: false,
    offset: 500,
  }
   this.updateIndex = this.updateIndex.bind(this)
    
  }

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}


changeTab (selectedTab) {
  this.setState({selectedTab})
}
  search(){

  }
  showpop(){
    alert("Hi")
  }

  _showModal = () => this.setState({ open: true, offset: 0 })

  _hideModal = () => this.setState({open: false, offset: -10})

  render() {
    const buttons = ['Lands', 'Electronics', 'Best Sells']
    const { selectedIndex } = this.state


    return (
      <View style={styles.container}>
        
        < View style  = { styles.searchView}>

            <Header
              leftComponent={{ icon: 'graphic-eq', color: '#fff' }}
              centerComponent={{ text: 'Gsell', style: { color: '#fff', 
              fontSize: 25, fontFamily: 'System', fontWeight: '600' } }} 
              rightComponent={<TouchableWithoutFeedback
              
               onPress  = { this.showpop.bind(this)}
              > 
                <Icon
                  name='shopping-basket'
                  color='#fff' />
                </TouchableWithoutFeedback>}
              backgroundColor = "rgba(0,0,0,1)"
            />
            <View style  = { { alignSelf: 'stretch', flexDirection: 'row', 
            justifyContent: 'center',
            backgroundColor:'rgba(0,0,0,0.3)',
            alignItems: 'center',}}>
          
            <SearchBar
              round
              lightTheme
              onChangeText={this.search}
              inputStyle  = { { backgroundColor: '#fff'}}
              containerStyle = { { backgroundColor: 'rgba(0,0,0,0.1)', 
              alignSelf: 'stretch', flex: 1, marginLeft: 30, marginRight: 30, borderRadius: 30,
              marginTop: 60, borderBottomColor: 'green',}}
              placeholder='Type Here...' />
            </View>
        </ View>
        <View style  = { styles.segmentedButtonsView}>
           <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height:30, backgroundColor: 'black', borderRadius: 15,}} 
            selectedBackgroundColor  = 'white'
            innerBorderStyle  = { { color: 'white', borderTopColor: 'transparent'}}
            textStyle  = { { color: '#FF0047', fontFamily: 'System'}}
            buttonStyle  = { { height: 25}}/>
        </View>
         < View style  = {styles.bottomView}>
            <MainScreen/>
            <View style  = { { position: 'absolute', 
            bottom: 0, alignSelf: 'stretch', 
            height: 80, width: 375, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(1,1,1,0.3)'}}>
                <TouchableOpacity 
                 onPress = { this._showModal}
                style  = {{
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                   alignItems: 'center',
                  backgroundColor:'white',
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: 'rgba( 0,0,0,0.2)'
                 
                }}>
                    <Icon
                      name='add'
                      color='#FF0047' />
                  </TouchableOpacity>
              </View>
            
        </ View>

         <Modal
              offset={this.state.offset}
              open={this.state.open}
              modalDidOpen={() => console.log('modal did open')}
              modalDidClose={() => this.setState({open: false})}
              containerStyle={{
	            justifyContent: 'center',
              paddingTop: 40,
              paddingBottom: -100,
              padding: 10,
              paddingBottom: 0,
            }}
            modalStyle={{
              borderRadius: 2,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 0,
              padding: 0,
              backgroundColor: '#FFF',
              flex: 1,
              alignSelf: 'stretch',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            }}>
        <View  style={ styles.modal}>
          < View style  = { styles.modalContainer}>
            <View style  = { 
              { flex: 0.3, 
              alignSelf: 'stretch', 
              backgroundColor: '#FF0047',
              alignItems: 'center',
               borderTopLeftRadius: 0,
               borderTopRightRadius: 0,
               borderBottomWidth: 1,
               borderBottomColor: '#FF0047',
              justifyContent: 'center',}}>
                <Text style={{fontSize: 20, marginBottom: 10}}> Upload photo</Text>
                    <View style  = {{ flexDirection: 'row',
                    alignSelf: 'stretch', 
                    justifyContent: 'space-between',
                    paddingLeft: 40,
                    paddingRight: 40}}>
                        <Icon
                  name='photo'
                  color='black'
                  size = { 60} />
                    <Icon
                  name='photo-camera'
                  color='black'
                  size = { 60} />
                    </View>
                
                 
              </View>
            
            <View  
             style={
                { flex: 0.7, 
                alignSelf: 'stretch',
                backgroundColor: '#EFEFEF', 
                paddingTop: 10,
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 20,
                }}>
                <Text style  = {{
                  fontSize: 25,
                  marginTop: 10,
                  marginBottom: 10,
                  color: '#000',
                  fontWeight: '500',
                  textAlign: 'center',
                }}> Description </Text>
                <TextInput
              style={
                { flex: 0.3, 
                alignSelf: 'stretch',
                backgroundColor: '#FFF', 
                borderColor: 'gray', 
                padding: 40,
                paddingTop: 10,
                fontFamily: 'System',
                fontSize: 18,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: 'rgba(0,0,0,0.2)'}}
              multiline = {true}
              numberOfLines = {4}
              placeholder= {'Enter the description of you sell item here .......'}
              placeholderTextColor = '#393939'
              placeholderStyle={{ fontFamily:"System", borderColor: 'red' }}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <Text style  = {{
                 marginTop: 10,
                  fontSize: 25,
                  color: '#000',
                  fontWeight: '500',
                  textAlign: 'center',
                }}> Price </Text>
            <TextInput
              style={
                { 
                alignSelf: 'stretch',
                backgroundColor: '#FFF', 
                borderColor: 'gray', 
                padding: 40,
                paddingTop: 5,
                paddingBottom: 5,
                fontFamily: 'System',
                fontSize: 18,
                borderRadius: 25,
                borderBottomWidth: 2,
                borderColor: 'rgba(0,0,0,0.2)'}}
              placeholder= {'Enter the price of you sell item here .......'}
              placeholderTextColor = '#393939'
              placeholderStyle={{ fontFamily:"System", borderColor: 'red' }}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <TouchableOpacity
            style={
              { 
              backgroundColor: '#FF0047', 
              alignSelf: 'stretch',
              flex: 0.3,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 45,
              borderWidth: 5,
              borderColor: 'rgba(1,1,1,0.3)'
              }}
            onPress={ this._hideModal}>
            <Text>Sell</Text>
          </TouchableOpacity>
            </View>
          </ View>

          <TouchableOpacity
            style={
              { 
              backgroundColor: 'rgba(1,0,0,0.1)', 
              position: 'absolute',
              bottom: 5,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              }}
            onPress={ this._hideModal}>
            <Icon
                  name='close'
                  color='black'
                  size = { 30} />
          </TouchableOpacity>
        </View>
      </Modal>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
  },
  searchView:{
     flex: 0.2,
     alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  segmentedButtonsView:{
    flex: 0.04,
     alignSelf: 'stretch',
      padding: 15, 
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: 'rgba(0,0,0,0.1)',
  },
  bottomView:{
     flex: 0.76,
     alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modal:{
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    
  
  },
  modalContainer: {
    flex: 0.9,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});

AppRegistry.registerComponent('Gsell', () => Gsell);
