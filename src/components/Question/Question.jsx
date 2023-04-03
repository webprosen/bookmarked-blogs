import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <h1>Questions & Answers</h1>
            <div className="question-item">
                <div className="question">
                    1. What is the difference between props & state?
                </div>
                <p className='answer'>
                    - Props is a way to pass data from a parent component to a child component in react and typically used to customize the behavior and appearance of a child component based on its parent component.<br></br>
                    - State is used to manage data that can change over time in a react component. 
                </p>
            </div>
            <div className="question-item">
                <div className="question">
                    2. How does useState function work?
                </div>
                <p className='answer'>
                    - This function takes one argument, which is the initial value of the state, and returns an array with two values one is current value and other one is function. Return function to set state value.
                </p>
            </div>
            <div className="question-item">
                <div className="question">
                    3. What else can the useEffect function do other than load data?
                </div>
                <p className='answer'> 
                    - Trigger animations when a component is mounted or updated also add event listeners for keyboard shortcuts that trigger certain actions in your application. Overall It allows you to perform side effects and respond to changes in your component's state or props.
                </p>
            </div>
            <div className="question-item">
                <div className="question">
                    4. How does react work?
                </div>
                <p className='answer'>
                    - In react library it uses a virtual dom to update the UI efficiently, and state and props to manage data. When a component's state or props change, React re-renders the component and updates the virtual dom. Finally, React compares the virtual dom to the actual dom and updates the actual dom with the minimum number of changes required.
                </p>
            </div>
        </div>
    );
};

export default Question;