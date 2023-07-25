import React from 'react';
import {
    WidgetContainer,
    WidgetHeader,
    WidgetTitle,
    WidgetTimeFrameDropdown,
    WidgetHeaderLeft, WidgetChartContainer, WidgetLogo, WidgetFooter
} from "../global.styled";
import {useEffect, useState} from "react";
import {database} from "../firebase.config";
import {child, get, ref} from "firebase/database";
import LineChart from "./Chart";
import SignalDist from "./SignalDist";
import Overbs from "./Overbs";
import LostCrossover from "./LostCrossover";
import CustomSelect from "./CustomSelect";

interface Props {

}

export default function Widget({}: Props) {
    const [data, setData] = useState<any>([])
    const [chartData, setChartData] = useState<{ macd_val: [] }>({
        macd_val: []
    })
    const [keys, setKeys] = useState<Array<string>>([])
    const [timeframes, setTimeframes] = useState<Array<string>>([])
    const [color, setColor] = useState<string>('')
    const [selectedOptions, setSelectedOptions] = useState<any>({
        key: null,
        timeframe: null
    })

    const fetchDataFromFirebase = async () => {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, `widgets/tokens/macd/vals`));
        return snapshot.val();
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchDataFromFirebase();
                setData(response)
                const newKeys = Object.keys(response)
                setKeys(newKeys)
                setTimeframes(Object.keys(response[newKeys[0]]?.timeframes))
                setSelectedOptions({
                    key: newKeys[0],
                    timeframe: Object.keys(response[newKeys[0]]?.timeframes)[0]
                })

            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (selectedOptions.key && selectedOptions.timeframe) {
            setChartData(data[selectedOptions.key]?.timeframes[selectedOptions.timeframe])
        }
    }, [selectedOptions])
    return (
        <WidgetContainer>
            <WidgetHeader>
                <WidgetHeaderLeft>
                    <WidgetTitle>MACD</WidgetTitle>
                    <CustomSelect options={keys} onSelectOption={(e) => {
                        setSelectedOptions({
                            ...selectedOptions,
                            key: e
                        })
                    }}/>
                </WidgetHeaderLeft>
                <WidgetTimeFrameDropdown onChange={(e) => {
                    setSelectedOptions({
                        ...selectedOptions,
                        timeframe: e.target.value
                    })
                }}>
                    {
                        timeframes?.map((timeframe, index) => {
                                return (
                                    <option key={index} value={timeframe}>{timeframe}</option>
                                )
                            }
                        )
                    }
                </WidgetTimeFrameDropdown>
            </WidgetHeader>
            <WidgetChartContainer>
                <LineChart chartData={chartData?.macd_val || []}/>
            </WidgetChartContainer>
            <SignalDist setColor={setColor} color={color} dist={chartData?.macd_val[chartData?.macd_val?.length - 1]}/>
            <Overbs setColor={setColor} color={color}/>
            <LostCrossover dist={chartData?.macd_val[chartData?.macd_val?.length - 1]}/>
            <WidgetFooter>
                <WidgetLogo
                    src="https://static.wixstatic.com/media/07cc6a_e2e6ecc8928a44a88ff2fbca86c5aeec~mv2.png/v1/fill/w_117,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07cc6a_e2e6ecc8928a44a88ff2fbca86c5aeec~mv2.png"
                    alt=""/>
            </WidgetFooter>

        </WidgetContainer>
    );
}

