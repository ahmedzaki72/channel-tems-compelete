import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions, StyleSheet, Image, ScrollView, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Modal from "react-native-modal";
import Constants from 'expo-constants';


const { height: wHeight, width: wWidth } = Dimensions.get("window");

const SBar = Constants.statusBarHeight

export default ModalTest = (props) => {
  return ( 
    <React.Fragment>
            <Modal
              animationType = "slide" 
              style={{margin: 0, paddingTop: Platform.OS === "android" ? SBar : 0}}
              animationOut='slideOutDown'
              swipeDirection="down"
              transparent={true}
              isVisible={props.display}
              onRequestClose={props.onPress}
              onSwipeComplete={props.onPress}
             >
              <View style={styles.container}>
                <TouchableOpacity onPress={props.onPress}>
                  <Text style={{ textAlign: 'center' }}><Entypo name="chevron-small-down" size={32} color="#000" /> </Text>
                </TouchableOpacity>
                <ScrollView>
                  <Image source={props.source} style={{ width: wWidth - 16, height: wHeight * .3, resizeMode: 'cover' }} />
                </ScrollView>
              </View>
            </Modal>
      </React.Fragment>
   );
}
 

const styles = StyleSheet.create({
  container: {
    height: wHeight,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center'
  },

});








