import * as React from 'react'
import {View, Text } from 'react-native'

export default function SettingsScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <text
                onPress={() => alert('This is the "Settings " screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Home Screen
            </text>
        </View>
    )
}