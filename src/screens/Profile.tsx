import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ route, navigation }: any) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email: {user.email}</Text>
      <Text style={styles.label}>Date of Birth: {new Date(user.dob).toLocaleDateString()}</Text>

      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,color:'black'
  },
});

export default ProfileScreen;
