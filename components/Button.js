import { Text, TouchableOpacity } from 'react-native'
import { MaterialIcons  } from '@expo/vector-icons'

export default function Button({ label, onPress, name, size, color, width }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#36321D',
        borderColor: '#FFE03D',
        borderWidth: 3,
        padding: 15,
        borderRadius: 10,
        marginVertical: 25,
        width: '100%'
      }}>
      <Text
        style={{
          fontSize: 20,
          color: '#FFFFFF',
        }}>
        {label}
      </Text>
      <MaterialIcons  name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}