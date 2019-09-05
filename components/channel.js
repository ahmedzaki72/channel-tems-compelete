import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, ActivityIndicator, StatusBar, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ModalTest from './modalTester';
import { Entypo } from '@expo/vector-icons';



const { height: wHeight, width: wWidth } = Dimensions.get("window");

export default class Channel extends Component {
    state = {
        ready: false,
        images: [],
        modalVisible: false,
        newItem: '',
    };

    componentDidMount = () => {
        this._getData();
        this.setState({ ready: true })
    }

    _getData = async () => {
        const data = await this.props.navigation.state.params.image;
        this.setState({ images: data })
    }

    setModalVisible =async (visible, item) => {
      await this.setState({ modalVisible: visible, newItem: item });
    }


    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.container}>
                        <StatusBar hidden />
                        <ImageBackground source={{ uri: item }} style={styles.imageBac} imageStyle={{ resizeMode: 'cover' }}>
                            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                                <TouchableOpacity onPress={() => { this.setModalVisible(true, item) }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}><Entypo name="chevron-small-up" size={32} color="#ffff" /> {'\n'}SeeMore</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <ModalTest
                            display={this.state.modalVisible}
                            onPress={() => { this.setModalVisible(!this.state.modalVisible)}}
                            source={{ uri: this.state.newItem }}
                        />
            </View>
        );
    }

    render() {
        const { ready, images } = this.state;
        if (!ready) {
            return (
                <View style={styles.container1}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            );
        }
        return (
            <Carousel
                ref={(c) => { this._carousel = c }}
                data={images}
                renderItem={this._renderItem}
                sliderWidth={wWidth}
                itemWidth={wWidth}
                extraData={this.state}
                lockScrollWhileSnapping={true}
            // autoplay={true}
            // autoplayDelay={1000}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222',
    },
    imageBac: {
        width: wWidth,
        height: wHeight,
    }
});

