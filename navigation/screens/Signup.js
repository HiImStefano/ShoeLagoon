import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';

const Signup = () => {
  return (
    <View>
        <Text style={styles.container}>Signup</Text>
        <Button
            title="Click Here"
            onPress={() => alert('Button Clicked!')}
        />
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});