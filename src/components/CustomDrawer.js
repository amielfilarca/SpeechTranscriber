import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'
import navigationStrings from '../constant/navigationStrings';


function CustomDrawer(props) {
    const {navigation} = props

    return (
        <DrawerContentScrollView{...props}>


            <DrawerItem
                label="Home"
                onPress={()=>navigation.navigate(navigationStrings.MENUTAB)}
            />

        </DrawerContentScrollView>
    );
}


export default CustomDrawer;