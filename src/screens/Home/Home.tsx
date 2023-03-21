
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"

import { Participant } from '../../components'
import { PARTICIPANTS_LIST } from "../../constants"

import { styles } from './Home.styles'

const Home = () => {
  const [nameInputValue, setNameInputValue] = useState('')
  const [participants, setParticipants] = useState( PARTICIPANTS_LIST )

  const handleAddParticipant = (name: string) => {
    if ( participants.includes( name ) ) {
      return Alert.alert('Participant already exist!', `There is already a participant with the name: ${name}`)
    }

    setParticipants( prev => [...prev, name ] )
    setNameInputValue('')
  }

  const handleRemoveParticipant = ( name: string ) => {
    Alert.alert('Remove', `Do you wish to remove participant: ${ name }`, [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Remove',
        isPreferred: true,
        style: 'destructive',
        onPress: () => Alert.alert('Removed')
      }
    ])
  }

  const handleNameInputChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setNameInputValue(() => e.nativeEvent.text)
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
        <TextInput style={styles.input} placeholder='Name' placeholderTextColor='#6b6b6b' onChange={handleNameInputChange} value={nameInputValue} />

        <TouchableOpacity  style={styles.button} onPress={() => handleAddParticipant( nameInputValue )}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ participants }
        keyExtractor={ item => item }
        showsVerticalScrollIndicator={ false }
        ListEmptyComponent={ () => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda? Adicione participantes à sua lista de presença.
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