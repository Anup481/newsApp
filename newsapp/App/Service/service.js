/*
 *   File : service.js
 *   Author URI : Anup kushwaha
 *   Description : Global function for API
 *   Integrations : Na
 *   Version : v1.1
 */

var service = async function (api, token) {
  try {
    var API_URL = 'https://newsapi.org/v2/everything?q=keyword&apiKey=9e7573c35b2640b693c0de2ef03b622d';
    return fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.log(err)
  }
};

module.exports = service;
