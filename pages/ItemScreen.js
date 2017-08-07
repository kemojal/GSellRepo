
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View, StatusBar, SectionList, Image, TextInput } from 'react-native';



const dataSource  = 
  [ 
          {
            data: [
              {name: 'A Car for sale, with an anazing engine at a very cheap price', 
              price: 300, uri: 'https://cmfgam.files.wordpress.com/2011/04/for-sale-house.jpg'}, 
              {name: 'A Book for sale with a wonderful stories and a lady of tells', price: 800,
              uri: 'https://cmfgam.files.wordpress.com/2011/04/for-sale-house.jpg'},
              {
                name: 'For this example the first thing you need to do is remove all the borders in the app.', price: 400,
                uri: 'https://cmfgam.files.wordpress.com/2011/04/for-sale-house.jpg'
              },
              {name: 'Rosie is a wonderfull land wit lots of dudes and dines with greatee', price: 250,
               uri: 'https://cmfgam.files.wordpress.com/2011/04/for-sale-house.jpg'}, 
              {name: 'armanda is a story teller with and amazing boss of the world', price: 500,
               uri: 'https://cmfgam.files.wordpress.com/2011/04/for-sale-house.jpg'}
            ], key: 'SELL ITEMS'}
                ]

              

export default class MainScreen extends React.Component {

  constructor (props) {
      super(props)
     
  }

  state = {
    isModalVisible: false,
    open: false,
    offset: 100,
    image: null,
  }
  
  renderItem = (item) => {
    return <View style  = { styles.itemViewStyles}>
      < View style  = { {flex: 1, alignSelf: 'stretch', backgroundColor: 'transparent'}}>
         <Image
          style={{flex: 1, alignSelf: 'stretch', borderRadius: 8}}
          source={{uri: item.item.uri}}
        />          
     </ View>
        < View  style={{position: 'absolute', bottom: 0, paddingTop: 8,marginTop: 0, alignSelf: 'stretch', 
        justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', 
        borderBottomLeftRadius: 5, borderBottomRightRadius: 5,}}>
          < View style  = { styles.itemTextViewStyles}>
              <Text style  = { styles.itemTextStyles}> { item.item.name} </Text>
           </ View>
           < View style  = { styles.priceStyles}>
               <Text style  = { styles.priceTextStyles}> D{ item.item.price} </Text>
           </ View>
        </View>
    </View>
  }
  renderSeparator = () => {
    return <Text style = {{ fontSize: 18,}}> </Text>;
  };
  renderSectionHeader = (headerItem) => {
    return <Text  style  = { styles.headeritemStyles}> </Text>
  }
  
  
  render() {
     let { image } = this.state;
    return (
     
       <View style={styles.container}>
         <StatusBar hidden  = { true} />
        <View style = { styles.bottom}>

             <SectionList
             style  = { styles.sectionlist}
                renderItem={ this.renderItem}
                renderSectionHeader={ this.renderSectionHeader}
                sections={ dataSource}
                //data={dataSource}
                keyExtractor  = {(item) => item.name}
                ItemSeparatorComponent={this.renderSeparator}
              />

              
           </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white', //'#F0235F', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FFF', //'#F2B3D0',
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingTop: 0,
    marginTop: 0,
  },
  
  button:{
    flexDirection: 'row',
    flex: 0.3,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 45,
    height: 45,
    borderRadius: 32,
    marginLeft: 15,
  },
  text:{
    color: 'rgba(0.9,0.9,0.9,0.9)'
  },
  title:{
    color: 'white', 
    fontSize: 25,
    marginLeft: 10, marginRight: 10,
  },
  itemViewStyles:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    
  },
  itemTextViewStyles:{
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 25,
    marginTop: -5,
   
    
    
  },
  itemTextStyles:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: 'System',
    fontWeight:  '500',
    color: 'white',
    
  },
  headeritemStyles:{
    fontSize: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemdiscriptionStyles:{
    backgroundColor: 'green',
  },
  priceStyles:{
    flex: 0.3,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    marginTop: -5,
    marginBottom: 5,
    marginLeft: -15,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,

  },
  priceTextStyles:{
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',

  },
  sectionlist:{
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,

  }
});
