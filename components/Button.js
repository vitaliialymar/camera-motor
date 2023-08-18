import { Text, TouchableOpacity } from 'react-native'
import { MaterialIcons  } from '@expo/vector-icons'

export default function Button({ label, onPress, name, size, color }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#36321D',
        borderColor: '#FFE03D',
        borderWidth: 3,
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 20,
        width: '80%'
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color: '#FFFFFF',
        }}>
        {label}
      </Text>
      <MaterialIcons  name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}