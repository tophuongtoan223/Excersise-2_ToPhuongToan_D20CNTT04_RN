import { Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Home Screen</Text>
                <Button 
                    mode="contained" 
                    onPress={() => navigation.navigate('Details')}
                    style={styles.button} // Thêm style cho Button
                >
                    Go to Details
                </Button>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 20, // Để tạo khoảng cách giữa Text và Button
    },
    button: {
        backgroundColor: 'pink', // Đổi màu nút thành màu hồng
    },
});