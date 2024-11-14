// import React from 'react';
// import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Button } from 'react-native';
//
// const datasource = [
//     {
//         title: 'Water',
//         data: [
//             { name: 'Squirtle', cardNumber: '63' },
//             { name: 'Psyduck', cardNumber: '64' }
//         ],
//         icon: '💧',
//         bgColor: 'lightblue'
//     },
//     {
//         title: 'Fire',
//         data: [
//             { name: 'Charmander', cardNumber: '65' },
//             { name: 'Vulpix', cardNumber: '66' }
//         ],
//         icon: '🔥',
//         bgColor: 'salmon'
//     }
// ];
//
// const renderItem = ({ item }) => {
//     const imageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardNumber}-2x.png`;
//     return (
//         <TouchableOpacity style={styles.itemContainer}>
//             <Text style={styles.textStyle}>{item.name}</Text>
//             <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
//         </TouchableOpacity>
//     );
// };
//
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Button title="Add Pokemon" onPress={() => alert('Add Pokemon')} />
//             <SectionList
//                 sections={datasource}
//                 renderItem={renderItem}
//                 renderSectionHeader={({ section: { title, icon, bgColor } }) => (
//                     <Text style={[styles.headerText, { backgroundColor: bgColor }]}>{icon} {title}</Text>
//                 )}
//                 keyExtractor={(item, index) => item.name + index}
//             />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 20,
//         paddingHorizontal: 10
//     },
//     itemContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//         backgroundColor: '#E0FFFF', // Light cyan color background for items
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//         marginHorizontal: 10,
//         borderRadius: 10,
//         borderColor:'black'
//     },
//     textStyle: {
//         fontSize: 18,
//         color: '#000', // Ensure text is visible
//         flex: 1, // Gives text component flexibility to use available space
//         margin: 5
//     },
//     imageStyle: {
//         width: 200,
//         height: 200,
//         borderRadius: 10 // Optional: adds rounded corners to the images
//     },
//     headerText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: 10
//     }
// });
