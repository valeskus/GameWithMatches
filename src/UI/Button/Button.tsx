import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, ImageStyle, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    onPress: () => void;
    title: string;
}

export function Button({ onPress,title }: Props): JSX.Element {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
            ]
            }
        >
            <Text>{title}</Text>
        </Pressable>
    );
}