/*
 *   File : home.js
 *   Author : Anup kushwaha
 *   Description : Home screen
 *   Integrations : Na
 *   Version : v1.1
 */
import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { Styles, CONSTANTS, COLORS } from '../../../Themes';
import { StatusBar } from '../../Components/StatusBar';
import { MenuBar } from '../../Components/Header';
import { NewsCard } from '../../Components/Cards';
import { Service } from '../../../Service';

export default function Home(props) {
  const [newsList, setNewsList] = useState([]);
  const [apiLoading, setAPILoading] = useState(true);

  useEffect(() => {
    _getNewsList();
  }, []);

  // handle read more on click
  function _handleReadMoreClick() {}

  async function _getNewsList() {
    let api = 'https://newsapi.org/v2/everything?q=keyword&apiKey=';
    let token = '9e7573c35b2640b693c0de2ef03b622d';

    try {
      let response = await Service(api, token);
      console.log(' reponse in home data STARTUP ', response);
      if (response.status == 'ok') {
        setNewsList(response.articles);
      } else {
        setNewsList([]);
      }
      setAPILoading(false);
    } catch (err) {
      console.log('Something went wrong while fetching data. ', err);
    }
  }

  return (
    <SafeAreaView
      style={[Styles.flexOne, Styles.backgroundColorSmokeWhite]}
      forceInset={CONSTANTS.forceInset}>
      {/* status bar */}
      <StatusBar />

      {/* navigation bar */}
      <MenuBar label={'News'} />

      <Fragment>
        {apiLoading != true ? (
          /* news  */
          <FlatList
            data={newsList}
            bounces={false}
            showsVerticalScrollIndicator={false}
            vertical={true}
            overScrollMode={'never'}
            style={Styles.flexOne}
            contentContainerStyle={[
              Styles.paddingRight16,
              Styles.paddingBottom36,
              Styles.overFlow,
            ]}
            keyExtractor={(item, i) => `key-${i}`}
            extraData={props}
            renderItem={({ item, index }) => {
              return (
                <View style={[Styles.marginLeft16, Styles.paddingTop16]}>
                  <NewsCard
                    data={item}
                    list={true}
                    onclickReadMore={() => _handleReadMoreClick()}
                  />
                </View>
              );
            }}
            ListEmptyComponent= {() => {
               return (
                <View style={[Styles.flexOne, Styles.center]} >
                  <Text> There is no data, please check later</Text>
                </View>
               )
            }}
          />
        ) : (
          <View style={[Styles.flexOne, Styles.center]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </Fragment>
    </SafeAreaView>
  );
}
