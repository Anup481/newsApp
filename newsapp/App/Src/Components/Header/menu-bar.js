/*
 *   File : menu-bar.js
 *   Author : Anup kushwaha
 *   Description : custom navigation bar for Tab screens
 *   Integrations : NA
 *   Version : v1.1
 */

import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity, Image, TextInput } from 'react-native';

import { Styles, CONSTANTS, COLORS } from '../../../Themes';

export default function MenuBar(props) {

const [search, setSearch] = useState('');

// drawer options
  function _drawerOptions() {

  }

  // search news
  function _search() {

  }
  
  return (
    <View
      style={[
        Styles.backgroundColorPrussianBlue,
        Styles.row,
        Styles.paddingHorizontal16,
        Styles.paddingVertical16,
        Styles.spaceBetween,
      ]}>

      {/* primary section */}
      <View style= {Styles.row}>
        {/* drawer */}
        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          hitSlop={CONSTANTS.normalHitSlop}
          onPress={() => _drawerOptions()}>

          <Image source= {require('../../../Assets/images/hamburger.png')}
            style= {Styles.heightWidth24}
          />
        </TouchableOpacity>

        {/* logo */}
          <Image source= {{uri: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg'}}
              style= {[Styles.heightWidth24, Styles.marginLeft16]}
            />

        {/* menu bar label */}
        <Text
          style={[
            Styles.colorWhite,
            Styles.bold,
            Styles.fontSize18,
            Styles.lineHeight24,
            Styles.marginLeft16,
            Styles.maxWidth210,
          ]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {props.label}
        </Text>
      </View>

      <View style= {Styles.row}>

          {/* search */}
          <TextInput value={search}
            style={[
              Styles.marginLeft16,
              Styles.Width112,
              Styles.backgroundColorWhite,
              Styles.borderRadius4
            ]}
            onChangeText={text => setSearch(text)}/>

          {/* search button*/}
          <TouchableOpacity style= {[Styles.backgroundColorWhiteSmokeTint, Styles.paddingVertical4, Styles.paddingHorizontal8, Styles.marginLeft16, Styles.borderRadius4]}
            activeOpacity={CONSTANTS.activeOpacity}
            hitSlop={CONSTANTS.normalHitSlop}
            onPress={() => _search()}>
            <Image source= {require('../../../Assets/images/search.png')}
              style= {Styles.heightWidth16}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}
