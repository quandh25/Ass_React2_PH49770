import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {


  // const detailProduct =()=>{
  //   navigation.navigate('')
  // }


  const [selected, setSelected] = useState('home');

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
  ]
  const renderItemProduct = ({ item }) => {
    return (
      <View style={styles.BoxSP} >
        <Image style={styles.itemImage} source={item.image} ></Image>
        <Text style={styles.nameSP} >{item.name} </Text>
        <Text style={styles.nameSP} > {item.attribute} </Text>
        <Text style={styles.prSP} > {item.price} </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={require('../../assets/banner.png')}
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.bannerText}>
            <Text style={styles.txt1}>Planta - Tỏa sáng</Text>
            <Text style={styles.txt1}>không gian nhà bạn</Text>
            <Text style={styles.txt2}>Xem hàng mới về</Text>
          </View>

          <Icon
            name="shopping-cart"
            size={24}
            color={selected === 'shopping-cart' ? '#FF5722' : '#fff'}
            style={styles.cartIcon}
            onPress={() => handlePress('cart')}
          />
        </ImageBackground>
      </View>

      {/* Title */}
      <Text style={styles.txt3}>Cây trồng</Text>
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
  bannerContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  image: {
    height: 240,
    width: '100%',
    justifyContent: 'flex-end',
  },
  bannerText: {
    marginBottom: 120,
    paddingLeft: 15
  },
  txt1: {
    fontSize: 16,
    fontStyle: 'italic',
    padding: 3
  },
  txt2: {
    color: '#66CC33',
    fontSize: 14,
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
  cartIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: "#999999"
  },
  itemImage: {
    width: 150,
    height:150,
  },
  BoxSP:{
    backgroundColor: "#EEEEEE",
    borderRadius: 8,

  },
  nameSP:{
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5
  },
  prSP:{
    marginLeft: 8,
    color: "#66CC00"
  }
});

export default Home;
