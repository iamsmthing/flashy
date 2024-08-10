import { Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import {hp, wp} from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'
const Welcome = () => {
    const router=useRouter();
  return (
    <ScreenWrapper bg="white">
        <StatusBar style='dark'/>
      <View style={styles.container}>
        {/* {welcome image} */}
        <Image 
        source={require('../assets/images/welcome.png')}
        resizeMode='contain'
        style={styles.welcomeImage}/>
        {/* title */}
        <View style={{gap:10}}>
            <Text style={styles.title}>Flashy</Text>
            <Text style={styles.punchline}>Capture, Share, Shine!</Text>
        </View>

        {/* footer */}

        <View style={styles.footer}>
            <Button
             title="Let's get Started"
             buttonStyle={{marginHorizontal:wp(3),paddingHorizontal:10}}
             onPress={()=>router.push('/SignUp')}
             />
             <View style={styles.bottomTextContainer}>
                <Text style={styles.loginText}>Already have an Account!</Text>
                <Pressable onPress={()=>router.push('/Login')}>
                    <Text style={[styles.loginText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>Login</Text>
                </Pressable>
             </View>
        </View>
        
        
     </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'white',
        marginHorizontal:wp(4)
    },
    welcomeImage:{
        height:hp(30),
        width:wp(100),
        alignSelf:'center'
    },
    title:{
        fontSize:hp(4),
        color:theme.colors.text,
        textAlign:'center',
        fontWeight:theme.fonts.extraBold
    },
    punchline:{
        fontSize:hp(1.7),
        textAlign:'center',
        paddingHorizontal:wp(10),
        color:theme.colors.text
    },
    footer:{
        width:wp(100),
        gap:30
    },
    bottomTextContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:5
    },
   
})