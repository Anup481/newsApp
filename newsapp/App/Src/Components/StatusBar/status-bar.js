/*
 *   File : statusbar.js
 *   Author : Anup kushwaha
 *   Description : status bar
 *   integrations: na
 *   Version : v1.1
 */

import React from 'react';
import { StatusBar} from 'react-native';

export default function Statusbar (props) {
    
    return (
        <StatusBar key= {props}
            animated= {true}
            hidden= {false}
            translucent= {true}
            barStyle= {'light-content'} 
            backgroundColor= {'rgba(0, 0, 0, 0.2)'} /> 
    );
}