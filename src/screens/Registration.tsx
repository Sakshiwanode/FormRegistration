import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleRegister = async () => {
    if (email && password) {
      try {
        const user = { email, password, dob };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        Alert.alert('Success', 'Registration Successful', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} value={password} secureTextEntry onChangeText={setPassword} />

      <Text style={styles.label}>Date of Birth:</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          mode="date"
          value={dob}
          display="default"
          onChange={(event, date) => {
            setShowPicker(false);
            if (date) setDob(date);
          }}
        />
      )}

      <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e9c31b',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color:"black",
    
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  dateButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RegisterScreen;
