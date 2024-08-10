import { StyleSheet} from "react-native";
import { View, Text,Button } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';
export default function Page() {
  return (
    <ScreenWrapper bg="white">
      <Text>index</Text>
      <Button title="Wecome" onPress={()=>router.push('/Welcome')}/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  
});
