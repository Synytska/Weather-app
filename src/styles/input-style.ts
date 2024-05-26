import { StylesConfig, CSSObjectWithLabel } from 'react-select';

const customStyles: StylesConfig<any, false> = {
    control: (provided: CSSObjectWithLabel, state) => ({
        ...provided,
        backgroundColor: '#000',
        borderColor: state.isFocused ? '#333' : '#ccc',
        '&:hover': {
            borderColor: '#333'
        },
        boxShadow: state.isFocused ? '0 0 0 1px #333' : undefined
    }),
    option: (provided: CSSObjectWithLabel, state) => ({
        ...provided,
        backgroundColor: '#000',
        borderColor: '#ccc',
        color: state.isSelected ? '#333' : '#fff',
        '&:hover': {
            backgroundColor: '#ccc',
            color: '#000'
        }
    }),
    menu: (provided: CSSObjectWithLabel) => ({
        ...provided,
        backgroundColor: '#000'
    }),
    singleValue: (provided: CSSObjectWithLabel) => ({
        ...provided,
        color: '#fff'
    })
};

export default customStyles;

