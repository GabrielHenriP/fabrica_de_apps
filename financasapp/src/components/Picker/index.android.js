import React, { useState } from 'react';
import { Picker as RNPickerSelect } from '@react-native-picker/picker';


import {PickerView} from './styles';

export default Picker = ({ onChange, tipo, valor:val }) => {

    const [select, setSelect] = useState('')
    console.log(select)
    return(
        <PickerView>
            <RNPickerSelect
            style={{
                width:'100%'
            }}
            selectedValue={val === '' ? '' : select}
            onValueChange={ valor => {onChange(valor); setSelect(valor)} }
            >
                <RNPickerSelect.Item label='Selecione o tipo' color='#ededed'/>
                <RNPickerSelect.Item label='Receita' value='receita' color='balck'/>
                <RNPickerSelect.Item label='Despesa' value='despesa' color='balck' />
            </RNPickerSelect>
        </PickerView>
    )
}