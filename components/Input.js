import { View, TextInput } from 'react-native';

export default function Input({ label, icon, inputType, keyboardType, value, onChangeText }) {
  return (
    <View
      style={{
        borderWidth: 3,
        borderRadius: 24,
        marginBottom: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        borderColor: '#48484A',
        paddingHorizontal: 10
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 10, color: '#999999'}}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'#999999'}
          selectTextOnFocus={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 10, color: '#999999'}}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'#999999'}
          selectTextOnFocus={true}
        />
      )}
    </View>
  )
}