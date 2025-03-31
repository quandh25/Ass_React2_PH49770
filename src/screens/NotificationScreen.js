import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const notifications = [
  { id: '1', title: 'Khuyến mãi HOT!', message: 'Nhận ngay 20% giảm giá cho đơn hàng đầu tiên.', icon: 'gift' },
  { id: '2', title: 'Đơn hàng đã giao', message: 'Đơn hàng của bạn đã được giao thành công.', icon: 'check-circle' },
  { id: '3', title: 'Cập nhật bảo mật', message: 'Hãy cập nhật mật khẩu của bạn để tăng cường bảo mật.', icon: 'shield' },
  { id: '4', title: 'Lịch sử mua hàng', message: 'Bạn có một đơn hàng mới trong lịch sử giao dịch.', icon: 'shopping-cart' },
  { id: '5', title: 'Sự kiện sắp diễn ra', message: 'Tham gia sự kiện ưu đãi đặc biệt vào cuối tuần này!', icon: 'calendar' },
];

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={22} color="#fff" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Icon
          name="home"
          size={24}
          color="#333"
          onPress={() => navigation.navigate('Home')}
        />
        <Icon
          name="search"
          size={24}
          color="#333"
          onPress={() => navigation.navigate('Search')}
        />
        <Icon
          name="bell"
          size={24}
          color="#66CC00"
          onPress={() => navigation.navigate('Notification')}
        />
        <Icon
          name="user"
          size={24}
          color="#333"
          onPress={() => navigation.navigate('Account')}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#66CC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
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
