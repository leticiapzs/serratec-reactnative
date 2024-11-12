import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF8F0',
  },
  menuIcon: {
    marginRight: 10,
  },
  searchBox: {
    flex: 1,
    padding: 8,
    backgroundColor: '#F6E6D6',
    borderRadius: 20,
  },
  searchText: {
    fontSize: 16,
    color: '#999',
  },
  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#5E76BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  emailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#58BC8A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emailContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  emailSender: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
  },
  emailSubject: {
    fontSize: 14,
    color: '#555',
  },
  emailSnippet: {
    fontSize: 12,
    color: '#888',
  },
  emailTime: {
    fontSize: 12,
    color: '#aaa',
  },
  emptyMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  writeButton: {
    backgroundColor: '#FCEBDB',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'absolute',
    right: 20,
    bottom: 90,
  },
  writeText: {
    color: '#555555',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FCEBDB',
  },
  iconContainer: {
    alignItems: 'center',
  },
});
