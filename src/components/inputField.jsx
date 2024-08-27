import React, { useState } from 'react';

function InputField() {
    // 1. We create a state variable text using the useState hook and set 
    //its initial value to an empty string.
  const [text, setText] = useState('');

  // 2. We create a new function called handleInputChange that takes the event 
  // object as a parameter. This function is responsible for updating the 
  // text state variable with the current value of the input field.

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    // 3. In the component's JSX, we set the value attribute of the input field 
    // to the current text state. This makes the input field a controlled 
    // component, as its value is directly controlled by React.
    // Attach the handleInputChange function to the input field's 
    // onChange event handler:
    // We connect the handleInputChange function to the onChange event 
    // handler of the input field. This ensures that the function is called 
    //every time the input field's value changes.

    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Input text: {text}</p>
    </div>
    // 4. Finally, we use the text state variable to display the current text 
    //in a paragraph element.

  );
}

export default InputField;