import React, {useState} from "react";
import PropTypes from 'prop-types';

import './emoji.css';

import green from '../assets/green.png';
import greenyellow from '../assets/green-yellow.png';
import yellow from '../assets/yellow.png';
import orange from '../assets/orange.png';
import red from '../assets/red.png';

const sizeMap = {
    small: { width: 30, height: 20, labelFontSize: 8 },
    medium: { width: 60, height: 40, labelFontSize: 14 },
    large: { width: 120, height: 80, labelFontSize: 20 }
};

const Emojis = ({labels, reverse, size, className = ''}) => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const emojis = [green, greenyellow, yellow, orange, red];


    const handleClick = (index) => {
      setSelectedEmoji(index); 
    };

    const { width, height, labelFontSize } = sizeMap[size] || sizeMap.medium;

    const displayEmojis = reverse ? emojis.slice().reverse() : emojis;
    const displayLabels = reverse ? labels.slice().reverse() : labels;
  
    return (
        <div className={`emoji-rating-container ${className}`}>
        {displayEmojis.map((emoji, index) => (
          <div key={index} className="emoji-wrapper">
            <img
              src={emoji}
              alt={`emoji-${index}`}
              className={`emoji ${selectedEmoji === index ? 'active' : ''}`}
              style={{ width, height }} 
              onClick={() => handleClick(index)}
            />
            { labels ? <span
              className="emoji-label"
              style={{
                fontSize: labelFontSize,
                opacity: selectedEmoji === null || selectedEmoji === index ? 1 : 0.4 
              }}
            >
              {displayLabels[index]}
            </span> : '' }
          </div>
        ))}
      </div>
    );
}

Emojis.propTypes = {
    labels: PropTypes.array,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    reverse: PropTypes.bool,
    className: PropTypes.string,
 };

export default Emojis;