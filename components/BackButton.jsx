import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'



const BackButton = ({size=26,router}) => {

  
  return (
    <Pressable onPress={()=>router.back()} style={styles.button}>
      
     <Icon name='arrowLeft' strokeWidth={2} size={size} color={theme.colors.primaryDark} />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({

      button:{
      alignSelf:'flex-start',
      padding:5,
      backgroundColor:'rgba(0,0,0,0.07)',
      borderRadius:theme.radius.sm

      }
})