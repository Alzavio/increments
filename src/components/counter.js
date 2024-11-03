import React, {useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    async function sleepToIncrease(time) {
        await new Promise((resolve) => setTimeout(resolve, time));
        setCount(count + 1)
    }

    function IncreaseTwice() {
        setCount(count + 1)
        setCount(count + 1)
    }

    function StateCorrection() {
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            {count}
            <div
                style={{border: "1px black solid", padding: "2rem"}}
                onClick={() => setCount(count+1)}
            >
                Increment
            </div>
            <div
                style={{border: "1px black solid", padding: "2rem"}}
                onClick={() => sleepToIncrease(2000)}
            >
                Increment After Delay
            </div>
            <div
                style={{border: "1px black solid", padding: "2rem"}}
                onClick={() => IncreaseTwice()}
            >
                Increment Twice
            </div>
            <div
                style={{border: "1px black solid", padding: "2rem"}}
                onClick={() => StateCorrection()}
            >
                Correct Increment Twice
            </div>
        </div>
    );
}

export default Counter;