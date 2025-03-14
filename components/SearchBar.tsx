import {
    View,
    TextInput,
    StyleSheet,
    TextInputProps,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface SearchBarProps extends TextInputProps {
    onCancel?: () => void;
}

export function SearchBarScreen({ children }: { children: React.ReactNode }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ flex: 1 }}>{children}</View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

function SearchBar({ style, onCancel, ...props }: SearchBarProps): React.ReactNode {
    const handleCancel = () => {
        Keyboard.dismiss();
        if (onCancel) onCancel();
    };

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

                <TouchableOpacity
                    onPress={handleCancel}
                    style={styles.cancelButton}
                    activeOpacity={0.7}
                    hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                    <AntDesign
                        name="closecircle"
                        size={20}
                        color="grey"
                        style={styles.cancelIcon}
                    />
                </TouchableOpacity>
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
    cancelButton: {
        padding: 4,
        zIndex: 10,
    },
    cancelIcon: {
        marginLeft: 2,
    },
});

export default SearchBar;
