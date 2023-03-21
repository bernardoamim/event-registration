
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"

import { Participant } from '../../components'

import { styles } from './Home.styles'

const Home = () => {
  const [nameInputValue, setNameInputValue] = useState('')
  const [participants, setParticipants] = useState<string[]>( [] )

  const clearInput = () => {
    setNameInputValue( () => '' )
  }

  const handleAddParticipant = () => {
    if ( participants.includes( nameInputValue ) ) {
      return Alert.alert('Participant already exist!', `There is already a participant with the name: ${nameInputValue}`)
    }

    setParticipants( prev => [...prev, nameInputValue ] )
    clearInput()
  }

  const handleRemoveParticipant = ( name: string ) => {
    const doRemove = () => setParticipants( prev => prev.filter( participant => participant !== name ) )

    Alert.alert('Remove', `Do you wish to remove participant: ${ name }`, [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Remove',
        isPreferred: true,
        style: 'destructive',
        onPress: () => doRemove()
      }
    ])
  }

  const handleNameInputChange = (text: string ) => {
    setNameInputValue(() => text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event name
      </Text>

      <Text style={styles.eventDate}>
        Friday - November 4, 2022
      </Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Name' placeholderTextColor='#6b6b6b' onChangeText={handleNameInputChange} value={nameInputValue} />

        <TouchableOpacity  style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ participants }
        keyExtractor={ item => item }
        showsVerticalScrollIndicator={ false }
        ListEmptyComponent={ () => (
          <Text style={styles.listEmptyText}>
            Nobody arrived yet? Add people to your event.
          </Text>
        )}
        renderItem={({item}) => (
          <Participant 
              key={item}
              name={ item }
              onRemoveParticipant={ handleRemoveParticipant } 
            /> 
        ) }
      />
    </View>
  )
}

export { Home as default, Home }