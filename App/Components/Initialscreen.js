// src/screens/WelcomeScreen.js
// src/screens/WelcomeScreen.js
// import React, { useState } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Image,
//     StatusBar,
//     Platform,
//     Modal,
//     Pressable,
//     TextInput,
//     FlatList
// } from "react-native";
// import Ionicons from 'react-native-vector-icons/Ionicons';


// export default function WelcomeScreen({ navigation }) {
//     const [langVisible, setLangVisible] = useState(false);
//     const [searchText, setSearchText] = useState("");

//     const allLanguages = ["English", "Japanese", "Urdu", "Arabic", "French", "Spanish"];
//     const filteredLanguages = allLanguages.filter((lang) =>
//         lang.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
//             <Image
//                 source={require("../src/images/initiallogo.png")}
//                 style={styles.bg}
//                 resizeMode="cover"
//             />

//             {/* Top globe button */}
//             <View style={styles.topRow}>
//                 <TouchableOpacity style={styles.globeBtn} onPress={() => setLangVisible(true)}>
//                     <Text style={styles.globeText}>🌐</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Main content */}
//             <View style={styles.content}>
//                 <Text style={styles.title}>Axys to</Text>
//                 <Text style={styles.titleSmall}>Neo Thinkers</Text>

//                 <TouchableOpacity
//                     style={styles.primaryBtn}
//                     onPress={() => navigation.navigate("Createaccountscreen")}
//                     activeOpacity={0.8}
//                 >
//                     <Text style={styles.primaryBtnText}>Get Started </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     style={styles.secondaryBtn}
//                     onPress={() => navigation.navigate("Login")}
//                     activeOpacity={0.8}
//                 >
//                     <Text style={styles.secondaryBtnText}>Log in</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Language Modal */}
//             <Modal
//                 visible={langVisible}
//                 transparent
//                 animationType="slide"
//                 onRequestClose={() => setLangVisible(false)}
//             >
//                 <View style={styles.modalOverlay}>
//                     <View style={styles.bottomSheet}>





//                         <View style={styles.modalHeader}>
//                             <Text style={styles.modalTitle}>Languages</Text>
//                             <TouchableOpacity onPress={() => setLangVisible(false)}>
//                                 <Text style={styles.closeIcon}>✕</Text>
//                             </TouchableOpacity>
//                         </View>
//                         {/* Gray line */}
//                         <View style={styles.separator} />

//                         {/* Search bar */}
//                         <View style={styles.searchContainer}>
//                             <Ionicons name="search" size={20} color="#999" />
//                             <TextInput
//                                 style={styles.searchInput}
//                                 placeholder="Search"
//                                 placeholderTextColor="#999"
//                                 value={searchText}
//                                 onChangeText={setSearchText}
//                             />
//                         </View>

//                         {/* Language list */}
//                         <FlatList
//                             data={filteredLanguages}
//                             keyExtractor={(item) => item}
//                             renderItem={({ item }) => (
//                                 <TouchableOpacity style={styles.langOption} onPress={() => setLangVisible(false)}>
//                                     <Text style={styles.langText}>{item}</Text>
//                                 </TouchableOpacity>
//                             )}
//                             style={{ marginTop: 10 }}
//                             keyboardShouldPersistTaps="handled"
//                         />
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#000" },
//     bg: { position: "absolute", width: "110%", height: "80%", opacity: 0.95 },
//     topRow: { marginTop: Platform.OS === "android" ? 40 : 60, paddingHorizontal: 20, alignItems: "flex-end" },
//     globeBtn: { padding: 6 },
//     globeText: { fontSize: 20 },
//     content: { flex: 1, justifyContent: "flex-end", padding: 32, paddingBottom: 80 },
//     title: { color: "#fff", fontSize: 28, fontWeight: "700" },
//     titleSmall: { color: "#fff", fontSize: 28, fontWeight: "700", marginBottom: 32 },
//     primaryBtn: { backgroundColor: "#fff", paddingVertical: 14, borderRadius: 8, marginBottom: 12 },
//     primaryBtnText: { color: "#000", textAlign: "center", fontWeight: "600" },
//     secondaryBtn: { borderColor: "#666", borderWidth: 1, paddingVertical: 12, borderRadius: 8 },
//     secondaryBtnText: { color: "#fff", textAlign: "center", fontWeight: "600" },




//     modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
//     bottomSheet: {
//         backgroundColor: "#111",
//         paddingHorizontal: 20,
//         paddingTop: 20,
//         paddingBottom: 40,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         maxHeight: "80%",
//     },
//     modalTitle: { color: "#fff", fontSize: 20, fontWeight: "700", marginBottom: 10 },
//     separator: { height: 1, backgroundColor: "#555", marginBottom: 15 },
//     searchContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: "#222",
//         paddingHorizontal: 10,
//         borderRadius: 8,
//         height: 40,
//     },
//     searchInput: { marginLeft: 8, color: "#fff", flex: 1 },
//     langOption: {
//         paddingVertical: 12,
//         borderBottomColor: "#333",
//         borderBottomWidth: 1,
//     },
//     langText: { color: "#fff", fontSize: 16 },
//     modalHeader: {
//   flexDirection: "row",
//   justifyContent: "space-between",
//   alignItems: "center",
// },
// closeIcon: { color: "#fff", fontSize: 20 },

// });
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    Platform,
    Modal,
    TextInput,
    FlatList
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLanguage } from "../src/Languagecontext";  // ⬅️ added

export default function WelcomeScreen({ navigation }) {
    const { language, setLanguage, t } = useLanguage();  // ⬅️ added
    const [langVisible, setLangVisible] = useState(false);
    const [searchText, setSearchText] = useState("");

    const allLanguages = [
        { label: "English", code: "en" },
        { label: "Japanese", code: "jp" }
    ];

    const filteredLanguages = allLanguages.filter((lang) =>
        lang.label.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            <Image
                source={require("../src/images/initiallogo.png")}
                style={styles.bg}
                resizeMode="cover"
            />

            {/* Globe */}
            <View style={styles.topRow}>
                <TouchableOpacity style={styles.globeBtn} onPress={() => setLangVisible(true)}>
                    <Text style={styles.globeText}>🌐</Text>
                </TouchableOpacity>
            </View>

            {/* Main content */}
            <View style={styles.content}>
                <Text style={styles.title}>{t("welcome_title")}</Text>
                <Text style={styles.titleSmall}>{t("welcome_title_small")}</Text>

                <TouchableOpacity
                    style={styles.primaryBtn}
                    onPress={() => navigation.navigate("Createaccountscreen")}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryBtnText}>{t("get_started")}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => navigation.navigate("Login")}
                    activeOpacity={0.8}
                >
                    <Text style={styles.secondaryBtnText}>{t("login")}</Text>
                </TouchableOpacity>
            </View>

            {/* Language Modal */}
            <Modal
                visible={langVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setLangVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.bottomSheet}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Languages</Text>
                            <TouchableOpacity onPress={() => setLangVisible(false)}>
                                <Text style={styles.closeIcon}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.separator} />

                        {/* Search Bar */}
                        <View style={styles.searchContainer}>
                            <Ionicons name="search" size={20} color="#999" />
                            <TextInput
                                style={styles.searchInput}
                                placeholder={t("search")}
                                placeholderTextColor="#999"
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                        </View>

                        {/* Language List */}
                        <FlatList
                            data={filteredLanguages}
                            keyExtractor={(item) => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.langOption}
                                    onPress={() => {
                                        setLanguage(item.code); // ⬅️ Switch language HERE
                                        setLangVisible(false);
                                    }}
                                >
                                    <Text style={styles.langText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                            style={{ marginTop: 10 }}
                            keyboardShouldPersistTaps="handled"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    bg: { position: "absolute", width: "110%", height: "80%", opacity: 0.95 },
    topRow: { marginTop: Platform.OS === "android" ? 40 : 60, paddingHorizontal: 20, alignItems: "flex-end" },
    globeBtn: { padding: 6 },
    globeText: { fontSize: 20 },
    content: { flex: 1, justifyContent: "flex-end", padding: 32, paddingBottom: 80 },
    title: { color: "#fff", fontSize: 28, fontWeight: "700" },
    titleSmall: { color: "#fff", fontSize: 28, fontWeight: "700", marginBottom: 32 },
    primaryBtn: { backgroundColor: "#fff", paddingVertical: 14, borderRadius: 8, marginBottom: 12 },
    primaryBtnText: { color: "#000", textAlign: "center", fontWeight: "600" },
    secondaryBtn: { borderColor: "#666", borderWidth: 1, paddingVertical: 12, borderRadius: 8 },
    secondaryBtnText: { color: "#fff", textAlign: "center", fontWeight: "600" },

    modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
    bottomSheet: {
        backgroundColor: "#111",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: "80%",
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    modalTitle: { color: "#fff", fontSize: 20, fontWeight: "700", marginBottom: 10 },
    separator: { height: 1, backgroundColor: "#555", marginBottom: 15 },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#222",
        paddingHorizontal: 10,
        borderRadius: 8,
        height: 40,
    },
    searchInput: { marginLeft: 8, color: "#fff", flex: 1 },

    langOption: {
        paddingVertical: 12,
        borderBottomColor: "#333",
        borderBottomWidth: 1,
    },
    langText: { color: "#fff", fontSize: 16 },

    closeIcon: { color: "#fff", fontSize: 20 },
});
