import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import AvatarS from './avatar';

const { height: wHeight, width: wWidth } = Dimensions.get("window");



export default class Cards extends Component {
    state = {
        channels: [
            { id: 1, logo: "https://images-na.ssl-images-amazon.com/images/I/41fwRfELb%2BL._SX425_.jpg", cover: "http://saidaonline.com/newsgfx/misse-sport-saidaonline.jpg", images : ["https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/france-v-germany-uefa-nations-league-a-5bca0ac66f0e5b6500000001.jpg","https://e2.365dm.com/18/02/768x432/skysports-ibrahimovic-manchester-united-la-galaxy_4226515.jpg?20180214171341","https://cdn.newsapi.com.au/image/v1/87f4ee11f4e87ef70e33338ec91bf15e"] },
            { id: 2, logo: "http://www.zerozero.pt/img/noticias/331/imgS620I191331T20170224174537.png", cover: "https://secure.static.goal.com/1254500/1254522_heroa.jpg", images : ["https://cdn.wallpapersafari.com/36/2/Yw0apb.jpg", "http://www.football-observatory.com/IMG/sites/b5wp/2017/209/en/images/wp209.jpg?crc=506385515","https://cdn.images.express.co.uk/img/dynamic/galleries/x701/294673.jpg"]},
            { id: 3, logo: "https://e0.365dm.com/19/05/2048x1152/skysports-liverpool-graphic_4668828.jpg", cover: "https://i.pinimg.com/originals/ce/4f/27/ce4f2751ab3fdef18a312dbbce0e5218.jpg", images : ["https://usatthebiglead.files.wordpress.com/2015/12/gettyimages-499043080.jpg?w=1000&h=600&crop=1", "https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2018/09/21/3461628c-e62c-4570-8996-1e7592ee55fa/39537642.jpg","https://balkanweb.com/wp-content/uploads/2016/12/1265104-27293699-2560-1440.jpg"]},
            { id: 4, logo: "https://bristolsport.azureedge.net/media/22386/manchester-united.jpg?width=1240&height=808&mode=crop", cover: "https://images.performgroup.com/di/library/GOAL_INTERNATIONAL/62/82/paul-pogba-manchester-united-2016_224y1fxc8yij1vk23p1n1ffwd.jpg?t=-171522641&quality=100", images : ["https://cdn.soccerladuma.co.za/cms2/image_manager/uploads/News/500679/7/default.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV72lPQ6afp5EXM4wcACVbZgm4kjID_uSYS1hv4JB5GpX05_t","https://www.watchmojo.com//uploads/thumbs720/SP-S-Top10-Football-Players-480i60.jpg"]},
            { id: 5, logo: "https://wallpaperstream.com/wallpapers/thumbnails/football-league-logos/Chelsea-Football-Club-Logo-with-Background_thumb2x.jpg", cover: "https://www.picturefarmproduction.com/wp-content/uploads/2018/05/nike-football-chelsea-2019-home-kits-2.jpg", images : ["https://atgbcentral.com/data/out/132/5111937-football-players.jpg", "https://www.essentiallysports.com/wp-content/uploads/2017/05/Cristiano-Ronaldo-Top-10-Richest-Football-Players-in-The-World-2017.jpg", "http://fcnaija.com/public/images/f90dbf0d5983ffa5ec9ccc28b79159c4.jpg"]},
            { id: 6, logo: "https://steemitimages.com/DQmfBSzA4PEyDrVPTwA89a6zyHhhCLhrTA3xwRDiMx8E44T/524a152ba8e4a5d638d9d6f87ec3c4ce_ac-milan.jpg", cover: "https://c8.alamy.com/comp/RT1GTK/davide-calabria-of-milan-during-the-italian-tim-cup-semi-final-match-between-lazio-and-ac-milan-at-stadio-olimpico-rome-italy-on-26-february-2019-RT1GTK.jpg", images : ["https://lh5.googleusercontent.com/proxy/SmRL5MvmTxn-EwpDgDY8xaaq9sIJO1ObwL8LAXLfk7a0XgZbV8bwQxIbjPm8L6QCJmnHnhzMahqZ-QOUXQqBc7Sa2EgNsgmiPJMmCqcao3puzx5mcVUAkDpVeXO7LYcpQZTTmiHuEt8bJRrpHKE9fjKVql1s8jun8m4=s0-d","http://im.rediff.com/sports/2018/aug/08neymar1.jpg","https://i.pinimg.com/236x/43/ba/38/43ba3832b8b941f51c080c9c619024af--football-photos-neymar-jr.jpg"]},
            { id: 7, logo: "https://thisisfootballislife.files.wordpress.com/2017/01/juventus-logo-design-graphics-football_products_dezeen_2364_col_7.jpg", cover: "https://i.dailymail.co.uk/i/newpix/2018/07/10/18/1531245506026_lc_galleryImage_Ron_mock_up2_jpg.JPG", images : ["https://2.bp.blogspot.com/-B8_zWD0gvSI/WsCpM2EoUJI/AAAAAAAADUc/ryNUXcv4Ldg3XSQXysZ9lR5RuefcjpbKwCLcBGAs/s1600/1.JPG", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHP8OxNdSbDuHb1HQWrElRMG45bFv15WXsnljOd0LevYYsATDgPQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkUGuBlq0ZqqbljRYzXlJdkmENQ2U9Z8Izsd5aUpzbQH_G0yB"]},
        ]
    }

    _keyExtractor = (item, index) => item.id.toString();

    _renderItem = ({ item }) => (
        <View style={styles.container1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Channel', {id : item.id , image: item.images})} >
                <Image
                    style={styles.image}
                    source={{ uri: item.cover}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('working1')} >
                <AvatarS source={{uri : item.logo}}/>
            </TouchableOpacity>
        </View>
    );
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref={ref => {
                        this.flatListRef = ref;
                    }}
                    horizontal={true}
                    data={this.state.channels}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: wHeight * 0.05,
    },
    container1: {
        flex: 1,
        marginLeft : wWidth * 0.03
    },
    image: {
        width: wWidth * 0.25,
        height: wHeight * 0.30,
        resizeMode: 'cover',
        borderRadius: 5
    }
});



