import {useEffect} from "react";

interface Props {
    amount: number
    setColor?: (color: string) => void
}

export default function SignalStrength({amount, setColor}: Props) {
    const commonBarStyle = {
        width: '12px',
        borderRadius: '2px',
        backgroundColor: 'gray'
    }

    let barColor = 'gray'

    const bars = ['10px', '15px', '20px', '25px', '30px']

    if (amount === 0) {
        barColor = 'red'
    } else if (amount >= 1 && amount <= 3) {
        barColor = 'rgb(255,180,0)'
    } else if (amount > 3 && amount <= 5) {
        barColor = 'green'
    }


    useEffect(() => {
        if (setColor) {
            setColor(barColor)
        }
    }, [barColor])

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: '3px'
            }}
        >
            {bars.map((bar, index) => (
                <div
                    key={index}
                    style={{
                        ...commonBarStyle,
                        height: bar,
                        backgroundColor: index < amount ? barColor : 'gray'
                    }}
                />
            ))}
        </div>
    )
}

