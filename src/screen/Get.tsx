import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useSWR from 'swr'
const Get = () => {
  
  
  const { data,error,isLoading,mutate } = useSWR('https://jsonplaceholder.typicode.com/users', (apiURL: string) => fetch(apiURL).then(res => res.json()))

  console.log('data',data)
  console.log('error',error)
  return (
    <View>
      {
        isLoading ? <ActivityIndicator size={'large'} style={{
          marginTop:50
        }}  /> : 
        <>
        <Text>App</Text>
      <Button
      onPress={mutate}
      title='REFETCH'
      />
        </>
      }

    
    </View>
  )
}

export default Get

const styles = StyleSheet.create({})