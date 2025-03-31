// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const relatedProducts = [
//   { id: '1', name: 'Monstera Deliciosa', price: '350.000 đ', image: require('../../assets/monstera.png') },
//   { id: '2', name: 'Cây Trầu Bà', price: '180.000 đ', image: require('../../assets/trau-ba.png') },
//   { id: '3', name: 'Cây Lưỡi Hổ', price: '200.000 đ', image: require('../../assets/luoi-ho.png') },
// ];

// const ProductDetail = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Hình ảnh sản phẩm */}
//       <Image source={require('../../assets/spider.png')} style={styles.productImage} />
      
//       {/* Thông tin sản phẩm */}
//       <View style={styles.productInfo}>
//         <Text style={styles.productName}>Spider Monstera</Text>
//         <Text style={styles.productCategory}>Thuộc cây Ưa bóng</Text>
//         <Text style={styles.productPrice}>250.000 đ</Text>
//         <Text style={styles.productDescription}>
//           Cây Spider Monstera là một loại cây cảnh nội thất phổ biến, mang lại không gian xanh mát và thư giãn. Cây có lá xẻ đặc trưng, dễ chăm sóc và phù hợp với nhiều môi trường sống.
//         </Text>

//         {/* Nút Thêm vào giỏ hàng */}
//         <TouchableOpacity style={styles.addToCartButton}>
//           <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Sản phẩm liên quan */}
//       <Text style={styles.relatedTitle}>Sản phẩm liên quan</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.relatedContainer}>
//         {relatedProducts.map((item) => (
//           <TouchableOpacity key={item.id} style={styles.relatedItem} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
//             <Image source={item.image} style={styles.relatedImage} />
//             <Text style={styles.relatedName}>{item.name}</Text>
//             <Text style={styles.relatedPrice}>{item.price}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </ScrollView>
//   );
// };

// export default ProductDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   productImage: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//   },
//   productInfo: {
//     padding: 20,
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   productCategory: {
//     fontSize: 16,
//     color: '#666',
//     marginVertical: 5,
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#009900',
//     marginVertical: 5,
//   },
//   productDescription: {
//     fontSize: 14,
//     color: '#555',
//     marginVertical: 10,
//     lineHeight: 20,
//   },
//   addToCartButton: {
//     backgroundColor: '#009900',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   addToCartText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   relatedTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   relatedContainer: {
//     paddingLeft: 20,
//     marginTop: 10,
//   },
//   relatedItem: {
//     marginRight: 15,
//     backgroundColor: '#f9f9f9',
//     padding: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: 130,
//   },
//   relatedImage: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//   },
//   relatedName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 5,
//   },
//   relatedPrice: {
//     fontSize: 14,
//     color: '#009900',
//     marginTop: 3,
//   },
// });
import React from 'react'
import { View } from 'react-native'

const ProductDetail = () => {
  return (
    <View>
      
    </View>
  )
}

export default ProductDetail