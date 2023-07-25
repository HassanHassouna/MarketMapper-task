import React, {useEffect, useState} from 'react';
import {DropdownContainer, DropdownList, DropdownButton, DropdownItem, DropDownDiv} from "../global.styled";


interface CustomDropdownProps {
    options: string[];
    onSelectOption: (option: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({options, onSelectOption}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(options[0]);

    useEffect(() => {
        setSelectedOption(options[0]);
    }, [options]);
    const handleDropdownToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        onSelectOption(option);
        setIsOpen(false);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={handleDropdownToggle}>
                {selectedOption ? selectedOption : ''}
            </DropdownButton>
            {isOpen && (
                <DropdownList>
                    {options?.map((option) => (
                        <DropdownItem key={option} onClick={() => handleOptionSelect(option)}>
                            {option}
                        </DropdownItem>
                    ))}
                    <DropDownDiv>
                        <span>Want data for more coins? Visit {' '}</span>
                        <a href={
                            'https://marketmapper.io?utm_source=macdwidget'
                        }>
                            marketmapper.io
                        </a>
                    </DropDownDiv>
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

export default CustomDropdown;
