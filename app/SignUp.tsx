import { StyleSheet, Text, View,Pressable,Alert } from 'react-native'
import React,{useRef,useState} from 'react'
import ScreenWrapper from '../components/ScreenWrapper'


import { supabase } from '../lib/supabase'

import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import {hp, wp} from '../helpers/common';
import Input from '../components/Input'
import Button from '../components/Button'
const SignUp = () => {
  const router=useRouter();
  const nameRef=useRef("");
  const emailRef=useRef("");
  const passwordRef=useRef("");
  const [loading,setLoading] = useState(false);

  const onSubmit=async ()=>{
   
    if(!nameRef.current && !emailRef.current && !passwordRef.current){
      Alert.alert('Creation of account failed!', 'please fill all the fields', [
      
        {text: 'Try again', onPress: () => console.log('OK Pressed')},
      ]);

      return ;

    }
      
      const name=nameRef.current.trim();
      const email=emailRef.current.trim();
      const password=passwordRef.current.trim();
      console.log("session:",name);
      setLoading(true);
      
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
          },
        },
      });
      console.log("session:",session);
  
      if (error) Alert.alert(error.message)
      // if (!session) Alert.alert('Please check your inbox for email verification!')
      setLoading(false)


    
  }

  return (
    <ScreenWrapper bg="white">
     <StatusBar style='dark'/>
      <View style={styles.container}>
           <BackButton router={router}/>
      {/* {welcome}   */}

      <View>

        <Text style={styles.welcomeText}>
          Let's 
        </Text>
        <Text style={styles.welcomeText}>
          Get Started😉
        </Text>
      </View>

      {/* form */}
      <View style={styles.form}>
         <Text style={{fontSize:hp(1.5),color:theme.colors.text}}>
          Please enter details to create a new account
         </Text>
      </View>
      <Input 
      icon={<Icon
         name="user"
         color={theme.colors.primaryDark}
         size={26} 
         strokeWidth={1.6}
          />}
        placeholder='Enter your name'
        onChangeText={(value:string)=>nameRef.current=value}
      />

      <Input 
      icon={<Icon
         name="mail"
         color={theme.colors.primaryDark}
         size={26} 
         strokeWidth={1.6}
          />}
        placeholder='Enter your email'
        keyboardType='email-address'
        onChangeText={(value:string)=>emailRef.current=value}
      />
       <Input 
      icon={<Icon
         name="lock"
         color={theme.colors.primaryDark}
         size={26} 
         strokeWidth={1.6}
          />}
        placeholder='Enter your Password'
        secureTextEntry
         onChangeText={(value:string)=>passwordRef.current=value}
         
      />

      {/* <Text style={styles.forgot}>Forgot password?</Text> */}

      <View style={styles.footer}>
            <Button
            loading={loading}
            title="SignUp"
            buttonStyle={{ marginHorizontal: wp(0), paddingHorizontal: 10 }}
            onPress={onSubmit} textStyle={undefined}             />
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

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:35,
    paddingHorizontal:wp(5)
  },
  welcomeText:{
    fontSize:hp(4),
    fontWeight:theme.fonts.bold,
    color:theme.colors.text
  },
  footer:{
    width:wp(90),
    gap:30
},
bottomTextContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:5
},
forgot:{
    alignSelf:'flex-end',
    color:theme.colors.primaryDark,
    fontSize:hp(1.5),
    fontWeight:theme.fonts.medium
},
loginText:{
    fontSize:hp(1.5),
},
form:{

}
})