import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';



export default IconButton = () => {
    return ( 
        <View style={{alignItems : 'center'}}>
            <Text style={{color : '#ffff',textAlign : 'center'}}><Octicons name="chevron-up" size={32} color="#ffff" /> {'\n'}SeeMore</Text>
        </View>
     );
}
 
