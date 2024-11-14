// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';
//
// const datasource = [
//     {
//         data: [
//             { key: 'a' },
//             { key: 'e' }
//         ],
//         title: 'Vowels',
//         bgcolor: "skyblue"  // Correct property setting for background color
//     },
//     {
//         data: [
//             { key: 'b' },
//             { key: 'c' },
//             { key: 'd' },
//             { key: 'e' },
//             { key: 'f' },
//             { key: 'g' },
//             { key: 'h' },
//             { key: 'i' },
//             { key: 'j' },
//             { key: 'k' },
//             { key: 'l' },
//             { key: 'm' },
//             { key: 'n' },
//             { key: 'o' },
//             { key: 'p' },
//             { key: 'q' },
//             { key: 'r' },
//             { key: 's' },
//             { key: 't' }
//         ],
//         title: "Consonants",
//         bgcolor: "khaki"
//     }
// ];
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <SectionList
//                 sections={datasource}
//                 renderItem={renderItem}
//                 renderSectionHeader={({ section: { title, bgcolor } }) => (
//                     <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>{title}</Text>
//                 )}
//                 keyExtractor={(item, index) => index.toString()}
//             />
//             <StatusBar style="auto" />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10, // Adds padding around the list
//         backgroundColor: '#f8f8f8' // Light grey background for the whole view
//     },
//     opacityStyle: {
//         borderWidth: 1
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left'
//     },
//     headerText: {
//         fontSize: 20,
//         margin: 10,
//         textAlign: 'center',
//         fontWeight: 'bold'
//     }
// });
