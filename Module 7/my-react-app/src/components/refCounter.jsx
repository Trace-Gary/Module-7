import {useRef, useState} from "react"

export default function RefCounter() {

    const [countState, setCountState] = useState(0)

    let countRef = useRef(0); // one counter stored in a ref
    let count = 0; // one counter stored in a normal variable

    function handleClick() {
        // update countRef object when clicking, via current property
        countRef.current = countRef.current + 1;

        count = count + 1; // update count variable when clicking
        // both counts should be the same value

        alert(`You clicked ${countRef.current} (${count}) times!`);
}
    return (
        <div className="RefCounter componentBox">
            <button onClick={handleClick}>
                REFCOUNTER: Click me!
            </button> ref: {countRef.current} var: {count} <br/>
            <button onClick={() => setCountState(countState +5)}>
                State Counter: Click me to update!
            </button>
            State: {countState}
        </div>
); }
