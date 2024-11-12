import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF8F0" barStyle="dark-content" />

      <View style={styles.header}>
      <Icon name="menu" size={30} color="#555555" style={styles.menuIcon} />
        <View style={styles.searchBox}>
          <Text style={styles.searchText}>Pesquisar no e-mail</Text>
        </View>
        
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitial}>L</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.messageText}>A caixa de spam está vazia</Text>
      </View>

      <View style={styles.writeButton}>
          <Icon name="pencil-outline" size={20} color="#555555" style={{ marginRight: 8 }} />
          <Text style={styles.writeText}>Escrever</Text>
        </View>

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Icon name="email-outline" size={26} color="#555555" />
        </View>
        
        <View style={styles.iconContainer}>
          <Icon name="video-outline" size={26} color="#555555" />
        </View>

      </View>
    </View>
  );
}
