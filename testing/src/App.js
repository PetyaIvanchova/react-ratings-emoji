import React, { useState } from 'react';
import {Emojis} from 'react-ratings-emoji'; 

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (index) => {
    setSelectedEmoji(index);
  };
  return (
    <div className="App">
      <style>
       {`
         .custom-emoji-rating {
           background-color: #f0f0f0;
           border: 2px solid #ccc;
           border-radius: 8px;
           padding: 10px;
         }
       `}
     </style>
      <h1>Your Rating: {selectedEmoji !== null ? selectedEmoji : "None"}</h1>
      
      <Emojis
        labels={["Excellent", "Good", "Neutral", "Bad", "Very Bad"]}
        size="large"
        reverse={true}
        heading="Please rate your experience:"
        className="custom-emoji-rating"
        onSelect={handleEmojiSelect} 
      />
    </div>
  );
}

export default App;
