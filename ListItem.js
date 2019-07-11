import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const listItem = (props) => {
    return <TouchableOpacity style={{
                                width: '100%',
                                marginBottom: 5,
                                padding: 10,
                                backgroundColor: props.isActive ?'blue' : '#eee'
                            }}
                            onLongPress={props.move}
                            onPressOut={props.moveEnd}>
        <Text>{(props.index+1) +".- " + props.item.label}</Text>
    </TouchableOpacity>
};

export default listItem;