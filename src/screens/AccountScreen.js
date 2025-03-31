import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('user');

  const handlePress = (iconName) => {
    setSelected(iconName);
    if (iconName === 'home') {
      navigation.navigate('Home');
    } else if (iconName === 'search') {
      navigation.navigate('Search');
    } else if (iconName === 'bell') {
      navigation.navigate('Notification');
    } else if (iconName === 'user') {
      navigation.navigate('Account');
    }
  };

  const handleOptionPress = (option) => {
    console.log('Bạn đã chọn:', option);
    // Điều hướng nếu cần
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../../assets/user.png')} style={styles.avatar} />
          <Text style={styles.name}>Nguyễn Văn A</Text>
          <Text style={styles.email}>nguyenvana@gmail.com</Text>
        </View>

        <Text style={{ marginLeft: 20, fontStyle: 'italic' }} > Chung </Text>
        <Text style={{ marginLeft: 20 }} >--------------------------------------------------------------------------------</Text>
        {/* Options */}
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('Edit')}>
            <Icon name="user" size={20} color="#66CC00" />
            <Text style={styles.optionText}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('Guide')}>
            <Icon name="book" size={20} color="#66CC00" />
            <Text style={styles.optionText}>Cẩm nang cây trồng</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('History')}>
            <Icon name="history" size={20} color="#66CC00" />
            <Text style={styles.optionText}>Lịch sử giao dịch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('Q&A')}>
            <Icon name="question-circle" size={20} color="#66CC00" />
            <Text style={styles.optionText}>Q & A</Text>
          </TouchableOpacity>

        </View>
        <Text style={{ marginLeft: 20, fontStyle: 'italic', marginTop: 10 }} > Bảo mật và điều khoản </Text>
        <Text style={{ marginLeft: 20 }} >--------------------------------------------------------------------------------</Text>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Icon
          name="home"
          size={24}
          color={selected === 'home' ? '#66CC00' : '#333333'}
          onPress={() => handlePress('home')}
        />
        <Icon
          name="search"
          size={24}
          color={selected === 'search' ? '#66CC00' : '#333333'}
          onPress={() => handlePress('search')}
        />
        <Icon
          name="bell"
          size={24}
          color={selected === 'bell' ? '#66CC00' : '#333333'}
          onPress={() => handlePress('bell')}
        />
        <Icon
          name="user"
          size={24}
          color={selected === 'user' ? '#66CC00' : '#333333'}
          onPress={() => handlePress('user')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100, // để tránh bị che bởi Bottom Nav
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  optionContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default AccountScreen;
