
import './App.css';
import {Emojis} from 'react-ratings-emoji';

function App() {
  const labels = ['Excellent', 'Good', 'Okay', 'Bad', 'Very Bad'];

  return (
    <div>
    <style>
      {`
        .custom-emoji-rating {
          background-color: #f0f0f0;
          border: 2px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          --emoji-label-color: #1154F0;
        }
      `}
    </style>
    <Emojis
      labels={labels}
      size="small"
      reverse={false}
      className="custom-emoji-rating"
    />
  </div>
  );
}

export default App;
