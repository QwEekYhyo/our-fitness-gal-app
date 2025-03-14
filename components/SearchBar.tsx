import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface SearchBarProps extends TextInputProps {
    onCancel?: () => void;
}

function SearchBar({ style, onCancel, ...props }: SearchBarProps): React.ReactNode {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={20} color="grey" style={styles.searchIcon} />

                <TextInput
                    {...props}
                    style={[styles.input, style]}
                    placeholderTextColor="#8E8E93"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <AntDesign
                    name="closecircle"
                    size={20}
                    color="grey"
                    onPress={onCancel}
                    style={styles.cancelIcon}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E5E5EA",
        borderRadius: 10,
        paddingHorizontal: 8,
        height: 36,
    },
    searchIcon: {
        marginRight: 6,
    },
    input: {
        flex: 1,
        fontSize: 17,
        color: "#000",
        height: "100%",
        paddingVertical: 0,
    },
    cancelIcon: {
        marginLeft: 6,
    },
});

export default SearchBar;
