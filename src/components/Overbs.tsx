import React from 'react';
import {WidgetHeader, Title, Value} from "../global.styled";
import SignalStrength from "./SignalStrength";

interface Props {
    color: string
    setColor: (color: string) => void
}


export default function Overbs({color, setColor}: Props) {
    return (
        <WidgetHeader>
            <Title>
                Overbought / Oversold
            </Title>
            <Value>
                <p style={{color: color}}>
                    {
                        color === 'red' ? 'Oversold' : color === 'green' ? 'Overbought' : 'Neutral'
                    }

                </p>
                <SignalStrength setColor={setColor} amount={
                    Math.floor(Math.random() * 5)
                }/>


            </Value>
        </WidgetHeader>
    );
}
