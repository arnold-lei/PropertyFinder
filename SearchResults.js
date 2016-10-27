'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ListView,
    Text
} from 'react-native';

class SearchResults extends React.Component {
    constructor(props){
        super(proprs);
        var dataSource = new ListView.DataSource (
            {rowHasChanged: (r1, r2) => r1.lister_url !==  r2.lister_url});
        this.state = {
            dataSource: dataSource.clowWithRows(this.props.listings)
        };
    }
    renderRow(rowData, sectionID, rowID){
        return(
            <TouchableHighlight
                underlayColor="#ddd" >
                <View>
                    <Text>{rowData.title} </Text>
                </View>
            </TouchableHighlight>
        );
    }
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
        )
    }
}

module.exports = SearchResults
