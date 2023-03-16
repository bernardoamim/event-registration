import { View, Text, TouchableOpacity } from "react-native"
import {styles} from './Participant.styles'

type ParticipantProps = {
  name: string,
  onRemoveParticipant: ( name: string ) => void,
}

const Participant: React.FC<ParticipantProps> = ({ name, onRemoveParticipant }) => {

  return (
    <View style={ styles.container }>
      <Text style={ styles.name }>{ name }</Text>
      <TouchableOpacity  style={ styles.button } onPress={ () => onRemoveParticipant(name) }>
        <Text style={ styles.buttonText }> - </Text>
      </TouchableOpacity>
    </View>
  )
}

 export { Participant as default, Participant }