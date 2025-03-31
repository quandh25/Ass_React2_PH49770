import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('splash1');
    }, 1500);

    return () => clearTimeout(timer); // Cleanup tránh leak bộ nhớ
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://24hstore.vn/upload_images/images/SEO/ONPAGE/BLOG-hinh-nen-mau-xanh-la-cay/hinh-nen-dien-thoai-mau-xanh-la-cay.png',
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn màn hình
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default Splash;
