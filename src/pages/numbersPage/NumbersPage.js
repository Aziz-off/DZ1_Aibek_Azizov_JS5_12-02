import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Numbers from "../../components/numbers/Numbers";


const NumbersPage = () => {
    const dispatch = useDispatch();

    const [numbers, setNumbers] = useState({
        num: 0,
    });


    const onChangeNumber = (e) => {
        setNumbers({num: e.target.value})
    }

    const createNumbers = () => {
        dispatch({type: 'CREATE_NUMBERS', payload: numbers.num})
    }

    return (
        <div>
            Create numbers

            <input type="number" value={numbers.num} onChange={onChangeNumber}/>
            <button onClick={createNumbers}>+</button>
            <Numbers />
        </div>
    );
};

export default NumbersPage;