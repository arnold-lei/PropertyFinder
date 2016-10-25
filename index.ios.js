'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');


class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage3,
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
