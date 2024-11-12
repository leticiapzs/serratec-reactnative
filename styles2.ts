import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF8F0',
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  searchBox: {
    flex: 1,
    marginHorizontal: 10,
    height: 35,
    backgroundColor: '#F6E6D6',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  searchText: {
    fontSize: 14,
    color: '#555555',
  },
  profileCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#5E76BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shredderImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  messageText: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
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
    justifyContent: 'center',
    position: 'relative',
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
    fontSize: 16,
    color: '#555555',
  },
});
