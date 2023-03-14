import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native"

import { styles } from './Home.styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <StatusBar style="auto" />
    </View>
  )
}

export { Home as default, Home }