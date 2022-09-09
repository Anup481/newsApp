/*
 *   File : news-card.js
 *   Author : Anup kushwaha
 *   Description : news card
 *   Integrations : NA
 *   Version : v1.1
 */

import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// manual import
import { Styles, CONSTANTS, COLORS } from '../../../Themes';

/*
    NEWS CARD TYPES
        list: true (bigger card)
        list: false (small card)
*/

export default function NewsCard(props) {
  const navigation = useNavigation();

  // useState variables
  const [data, setNewsData] = useState(props.data);

  // navigate function
  function _navigateTo() {
    let news_data = {
      newsId: data.id,
      title: data.main_heading,
    };
    props.onclickReadMore(news_data);
  }

  return (
    <View style={Styles.shadowLite}>
      <TouchableOpacity
        activeOpacity={CONSTANTS.activeOpacity}
        style={[
          Styles.backgroundColorWhite,
          Styles.borderRadius8,
          Styles.shadowLite,
          Styles.overFlow,
          props.list ? Styles.width328 : Styles.width242,
        ]}
        onPress={() => _navigateTo()}>
        {/* cover image */}
        <Image
          source={{ uri: data.urlToImage }}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          style={
            props.list
              ? [Styles.width328, Styles.heightOnWidth138]
              : [Styles.width242, Styles.heightOnWidth102]
          }
        />
        <View style={[Styles.padding8, Styles.backgroundColorWhite]}>
          {/* date */}
          <Text
            style={[
              Styles.fontSize10,
              Styles.medium,
              Styles.lineHeight13,
              Styles.colorLynch,
            ]}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {data.publishing_date_text}
          </Text>

          {/* heading */}
          <Text
            style={[
              Styles.fontSize13,
              Styles.bold,
              Styles.lineHeight20,
              Styles.colorPrussianBlue,
              Styles.marginTop4,
              Styles.heightOnWidth42,
            ]}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {data.title}
          </Text>

          {/* read more */}
          <View style={[Styles.alignItemsFlexEnd, Styles.marginTop12]}>
            <View style={[Styles.row, Styles.alignItemsCenter]}>
              <View style={[Styles.paddingRight8, Styles.alignContentCenter]}>
                <Text
                  style={[
                    Styles.fontSize13,
                    Styles.bold,
                    Styles.lineHeight16,
                    Styles.colorPrimary,
                  ]}>
                  Read More
                </Text>
              </View>
              <Image
                source={require('../../../Assets/images/foward.png')}
                resizeMode="contain"
                style={[Styles.width18, Styles.heightOnWidth18]}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
