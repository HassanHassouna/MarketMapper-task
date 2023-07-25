import React from 'react';
import {Title, Value, WidgetHeader} from "../global.styled";

interface Props {
    dist?: {
        candlesSinceCrossover: number
    }
}

export default function LostCrossover({dist}: Props) {
    return (
        <WidgetHeader>
            <Title>
                Last Crossover
            </Title>
            <Value>
                {dist?.candlesSinceCrossover} candles ago
            </Value>
        </WidgetHeader>
    );
}

