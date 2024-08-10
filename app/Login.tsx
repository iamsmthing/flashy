import { StyleSheet, Text, View,Pressable, Alert } from 'react-native'
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
const Login = () => {
  const router=useRouter();
  const emailRef=useRef("");
  const passwordRef=useRef("");
  const [loading,setLoading] = useState(false);

  const onSubmit=async ()=>{
   if(!emailRef.current && !passwordRef.current){
    Alert.alert('Login Failed', 'please fill all the fields', [
      
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    return;
   }

   
   const email=emailRef.current.trim();
   const password=passwordRef.current.trim();

   setLoading(true)
   const { error } = await supabase.auth.signInWithPassword({
     email: email,
     password: password,
   })

   if (error) Alert.alert(error.message)
    console.log("Looged in:",error)
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
          Hey,
        </Text>
        <Text style={styles.welcomeText}>
          Welcome Back
        </Text>
      </View>

      {/* form */}
      <View style={styles.form}>
         <Text style={{fontSize:hp(1.5),color:theme.colors.text}}>
          Please login to continue
         </Text>
      </View>
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

      <Text style={styles.forgot}>Forgot password?</Text>

      <View style={styles.footer}>
            <Button
            loading={loading}
             title="Login"
             buttonStyle={{marginHorizontal:wp(0),paddingHorizontal:10}}
             onPress={onSubmit}
             />
             <View style={styles.bottomTextContainer}>
                <Text style={styles.loginText}>Don't have an Account?</Text>
                <Pressable onPress={()=>router.push('/SignUp')}>
                    <Text style={[styles.loginText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>Create an Account</Text>
                </Pressable>
             </View>
        </View>
      
      </View>
      
    </ScreenWrapper>
  )
}

export default Login

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
}
})