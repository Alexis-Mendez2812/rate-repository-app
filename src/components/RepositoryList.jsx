import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Constants from "expo-constants"
import repositories from "../data/repositories"
import RepositoryItem from './RepositoryItem'

const RepositoryList =() => {
    console.log("lista")
  return (
    <FlatList 
    data={repositories}
    ItemSeparatorComponent={()=><Text> </Text>}
    renderItem={({item:repo})=>(
<RepositoryItem {...repo}/>
    )}
    />
  )
}

export default RepositoryList