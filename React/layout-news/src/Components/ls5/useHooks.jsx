import {useState} from 'react'

const useHook = () => {
    const [number, setNumber] = useState(0);

    const numAct = () => {
        let resNum = number;
        resNum++;
        setNumber(resNum);
    }

    const numRmove = () => {
        let resNum = number;
        resNum--;
        setNumber(resNum);
    }
    return {number, numAct, numRmove}
}

export default useHook;