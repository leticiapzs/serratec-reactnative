import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles1';

const emailData = [
  {
    id: '1',
    icon: 'S',
    sender: 'Serratec Oficial (Google Sala de A...',
    subject: 'Novo comunicado: "Bom dia, Residentes! E...',
    snippet: 'Configurações de notificação Residentes 2...',
    time: '9 de nov.',
  },
  {
    id: '2',
    icon: 'S',
    sender: 'Serratec Oficial (Google Sala de A...',
    subject: 'Novo material: ""Oficina Scrum" - Material"',
    snippet: 'Configurações de notificação Residentes 2...',
    time: '28 de out.',
  },
];

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

      <FlatList
        data={emailData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.emailItem}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <View style={styles.emailContent}>
              <Text style={styles.emailSender}>{item.sender}</Text>
              <Text style={styles.emailSubject}>{item.subject}</Text>
              <Text style={styles.emailSnippet}>{item.snippet}</Text>
            </View>
            <Text style={styles.emailTime}>{item.time}</Text>
          </View>
        )}
      />

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

