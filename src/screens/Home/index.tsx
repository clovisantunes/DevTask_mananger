import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../../App'; // Importa Firestore
import { doc, getDoc } from 'firebase/firestore';

const Home = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const uid = await AsyncStorage.getItem('user_uid');

        if (uid) {
          const userRef = doc(db, 'users', uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserName(userSnap.data().name);
          } else {
            console.error('Nenhum documento encontrado para este UID!');
          }
        } else {
          console.error('UID não encontrado no armazenamento local.');
        }
      } catch (error) {
        console.error('Erro ao buscar nome do usuário pelo UID:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {userName ? `Bem-vindo, ${userName}!` : 'Usuário não encontrado.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default Home;
