import React from 'react';
import {useSelector} from "react-redux";

const Numbers = () => {
    const count = useSelector(state => state.count);

    return (
        <ul>
            {count.map((num, key) => <li key={key}>{num}</li>)}
        </ul>
    );
};

export default Numbers;