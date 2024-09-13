# react-ratings-emoji

[![NPM](https://img.shields.io/npm/v/react-ratings-emoji.png)](https://www.npmjs.com/package/react-ratings-emoji)
[![NPM Downloads](https://img.shields.io/npm/dt/react-ratings-emoji.svg)](https://www.npmjs.com/package/react-ratings-emoji)
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/petyaivanchova)


The Emojis component is a React component that allows users to rate something using a row of emojis. Each emoji represents a rating, and users can click on an emoji to select their rating. The component supports different sizes, reverse order display, and custom styling and labels.

[![temp-Image24-Jj-QU.avif](https://i.postimg.cc/brtvJNkZ/temp-Image24-Jj-QU.avif)](https://postimg.cc/zHqN2NdN)

npmjs.com : https://www.npmjs.com/package/react-ratings-emoji?activeTab=readme

Installation

To install the Emojis component, add it to your project via npm:

```
npm install react-ratings-emoji
```

Or with Yarn:

```
yarn add react-ratings-emoji
```

## Usage

First, import the Emojis component and the emoji images you want to use. Then, use the component in your JSX with the desired props.

Example

```jsx
import React, { useState } from 'react';
import {Emojis} from 'react-ratings-emoji'; 

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (index) => {
    setSelectedEmoji(index);
  };
  return (
    <div className="App">
      <h1>Your Rating: {selectedEmoji !== null ? selectedEmoji : "None"}</h1>
      
      <Emojis
        labels={["Excellent", "Good", "Neutral", "Bad", "Very Bad"]}
        size="medium"
        reverse={true}
        heading="Please rate your experience:"
        className="custom-emoji-rating"
        onSelect={handleEmojiSelect} 
      />
    </div>
  );
}

export default App;

```
## Props
| Name | Type | Description | Example |
|---|---|---| --- |
|__labels__ | (Array<string>) | An array of strings representing the labels for each emoji. The number of labels should match the number of emojis. | ['Very Bad', 'Bad', 'Okay', 'Good', 'Excellent'] |
| __reverse__ | (boolean) |  If true, reverses the order of emojis and labels. Defaults to false. | reverse={true}
| __size__ | ('small', 'medium', 'large') | Determines the size of the emojis and labels. Available options are: __'small'__: Emoji width:30px and height:20px, label font size is 8px. __'medium'__: Emoji width:60px and height:40px, label font size is 14px. __'large'__: Emoji width:120px and height:80px, label font size is 20px. | Example: size="large"
| __className__ | (string) | A custom CSS class to apply additional styles to the component. This class can be used to override default styles and apply custom colors, margins, etc. | Example: className="custom-style"
| __heading__ | (string) | The text to display above the emoji rating component. This can be used to provide a title or instruction for the emoji rating. | heading="Rate Your Experience"
| __onSelect__ | (index: number) =>void | A callback function that is called when an emoji is selected. The function receives the value of the selected emoji as an argument. This is useful for handling the selected emoji's value in the parent component. Clarified that the value passed to `onSelect` corresponds to the emoji's rating, which ranges from 1 to 5 | onSelect={handleEmojiSelect} 


## CSS Variables

The Emojis component uses CSS variables for dynamic styling. You can override these variables using the className prop to change the label color and other styles.

```css
.custom-style {
  color: #ff5722; 
}
```

## Custom Styling Example

```jsx
import React from 'react';
import {Emojis} from 'react-ratings-emoji'; 

function App() {
  const labels = ['Excellent', 'Good', 'Okay', 'Bad', 'Very Bad'];

  return (
    <div>
      <style>
        {`
          .custom-style {
            color: #ff5722; 
          }
        `}
      </style>
      <Emojis
        labels={labels}
        size="medium"
        reverse={false}
        className="custom-style"
      />
    </div>
  );
}

export default App;
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and include tests for your changes.
