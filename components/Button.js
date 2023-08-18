import { Text, TouchableOpacity } from 'react-native'
import { MaterialIcons  } from '@expo/vector-icons'

export default function Button({ label, onPress, name, size, color }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#36321D',
        borderColor: '#FFE03D',
        borderWidth: 3,
        padding: 20,
        borderRadius: 10,
        marginBottom: 50,
        width: '90%'
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 25,
          color: '#FFFFFF',
        }}>
        {label}
      </Text>
      <MaterialIcons  name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}