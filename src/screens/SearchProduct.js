import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const [selected, setSelected] = useState('search');
  const [searchText, setSearchText] = useState('');

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

  // product
  const products = [
    {
      id: '1',
      name: 'Cây Monstera',
      price: '200.000 đ',
      attribute: 'Ưa bóng',
      image: require('../../assets/spider.png')
    },
    {
      id: '2',
      name: 'Cây Monstera',
      price: '250.000 đ',
      attribute: 'Ưa sáng',
      image: require('../../assets/image 5.png')
    },
    {
      id: '3',
      name: 'Cây Monstera',
      price: '220.000 đ',
      attribute: 'Ưa bóng',
      image: require('../../assets/h1.png')
    },
    {
      id: '4',
      name: 'Cây Monstera',
      price: '270.000 đ',
      attribute: 'Ưa sáng',
      image: require('../../assets/spider.png')
    },
  ];

  const renderItemProduct = ({ item }) => {
    return (
      <View style={styles.BoxSP}>
        <Image style={styles.itemImage} source={item.image} />
        <Text style={styles.nameSP}>{item.name}</Text>
        <Text style={styles.nameSP}>{item.attribute}</Text>
        <Text style={styles.prSP}>{item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Search */}
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Icon name="search" size={18} color="#999" style={{ marginHorizontal: 10 }} />
          <TextInput
            placeholder="Tìm kiếm cây trồng..."
            value={searchText}
            onChangeText={setSearchText}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.cartBtn}>
          <Icon name="shopping-cart" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.txt3}>Bạn có thể biết</Text>

      {/* List product */}
      <FlatList
        data={products}
        renderItem={renderItemProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 6 }}
        contentContainerStyle={{ paddingBottom: 80, marginTop: 10 }}
      />

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  cartBtn: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
  },
  txt3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
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
  itemImage: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  BoxSP: {
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    overflow: 'hidden',
  },
  nameSP: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5,
  },
  prSP: {
    marginLeft: 10,
    color: '#66CC00',
    marginBottom: 8,
  },
});

export default Home;
