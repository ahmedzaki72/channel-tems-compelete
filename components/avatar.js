import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native';
const { height: wHeight, width: wWidth } = Dimensions.get("window");



const AvatarS = (props) => {
    return ( 
        <View style={styles.profileBorder}>
        <View style={styles.container2}>
          <Image
            source={props.source}
            style={styles.profile}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container2: {
      alignItems: "center"
    },
    profile: {
        height: wWidth * 0.12,
        width: wWidth * 0.12,
        borderRadius: wWidth * 0.06,
        borderColor: "#fff",
        borderWidth: 0.6,
        resizeMode : 'cover'
      },
    profileBorder: {
      height: wWidth  * 0.12 + 4,
      width: wWidth  * 0.12 + 4,
      borderRadius: wWidth  * 0.06 + 2,
      borderColor: "#fff",
      borderWidth: 0.6,
      marginTop: -wHeight * 0.1,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center"
    }
  });
 
export default AvatarS;