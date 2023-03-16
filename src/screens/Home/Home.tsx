
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from '../../components'

import { styles } from './Home.styles'

const Home = () => {
  const participants = [ 'Bernardo', 'Rodrigo', 'Thayná', 'João', 'José', 'Beta', 'Adelce', 'Kadu', 'Frango', 'Nois baby', 'Galo', 'Zero', 'Zóio', 'Joyce', 'Neal']

  const handleAddParticipant = (name: string) => {
    if ( participants.includes( name ) ) {
      return Alert.alert('Participant added.', `There is already a participant with the name: ${name}`)
    }
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

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event name
      </Text>

      <Text style={styles.eventDate}>
        Friday - November 4, 2022
      </Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor='#6b6b6b' />

        <TouchableOpacity  style={styles.button} onPress={() => handleAddParticipant("Bernardo")}>
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