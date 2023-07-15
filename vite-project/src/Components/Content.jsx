import React, { useState } from 'react';

const Content = () => {
  const [Text, setText] = useState('');

  const Click = () => {
    setText('This text will show after clicking');
  }

  return (
    <div>
      <textarea placeholder='Give here some text'></textarea><br/>
      <button onClick={Click}>Submite</button>
      <p>{Text}</p>
    </div>
  );
}

export default Content;