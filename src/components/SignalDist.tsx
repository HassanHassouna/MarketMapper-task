import React from 'react';
import {WidgetHeader, Title, Value, PercentageRect} from "../global.styled";
import SignalStrength from "./SignalStrength";

interface Props {
    dist?: {
        distStrength: number
        dist: number
    }
    color: string
    setColor: (color: string) => void
}

export default function SignalDist({dist, color, setColor}: Props) {

    if (!dist) return null
    return (
        <WidgetHeader>
            <Title>
                MACD to Signal Distance
            </Title>
            <Value>
                <PercentageRect color={color}>
                    {dist?.dist || 0}%
                </PercentageRect>
                <SignalStrength setColor={setColor} amount={dist?.distStrength || 0}/>
            </Value>
        </WidgetHeader>
    );
}

