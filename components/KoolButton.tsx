import { Pressable, PressableProps, Text, ViewStyle } from "react-native";

import { shadeColor } from "@/utils/color-utils";
import { iosBlue } from "@/utils/constants";

export type KoolButtonTheme = "blue" | "neutral" | "red";

export interface KoolButtonProps extends PressableProps {
    title: string;
    theme?: KoolButtonTheme;
}

const getThemedTextColor = (theme: KoolButtonTheme): string => {
    let color: string;

    switch (theme) {
        case "blue":
            color = "#ffffff";
            break;
        case "neutral":
            color = "#000000";
            break;
        case "red":
            color = "#e62222";
            break;
    }

    return color;
};

const getThemedColor = (theme: KoolButtonTheme, pressed: boolean): string => {
    let color: string;

    switch (theme) {
        case "blue":
            color = iosBlue;
            if (pressed) color = shadeColor(color, 25);
            break;
        case "neutral":
        case "red":
            color = "#e3e3e3";
            if (pressed) color = shadeColor(color, 4);
            break;
    }

    return color;
};

function KoolButton({ title, theme, ...props }: KoolButtonProps): React.ReactNode {
    const buttonTheme = theme ?? "neutral";
    const commonStyles: ViewStyle = {
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 6,
        transitionProperty: "background-color",
        transitionDuration: "100ms",
        transitionTimingFunction: "ease-in-out",
    };

    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: getThemedColor(buttonTheme, pressed),
                },
                commonStyles,
            ]}
            {...props}
        >
            <Text
                style={{
                    color: getThemedTextColor(buttonTheme),
                    fontSize: 18,
                    fontWeight: 500,
                    textAlign: "center",
                }}
            >
                {title}
            </Text>
        </Pressable>
    );
}

export default KoolButton;
