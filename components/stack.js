import { createStackNavigator, createAppContainer } from "react-navigation";
import Card from './card';
import Channel from './channel';

const StackNav = createStackNavigator({
    Card : {screen : Card},
    Channel : {screen : Channel},
},{
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
});


export default createAppContainer(StackNav);
