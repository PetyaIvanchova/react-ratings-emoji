import React from "react";
import type { Meta, StoryObj } from '@storybook/react';


import  Emojis  from "../components/Emojis";

const meta: Meta<typeof Emojis> = {
  component: Emojis,
};
 
export default meta;
type Story = StoryObj<typeof Emojis>;
 
export const Primary: Story = {
  args: {
    labels: ['Excellent', 'Good', 'Okay', 'Bad', 'Very Bad'],
    reverse: true,
    size: "large",
    className: 'custom-emoji-rating'
  },
};

export const CustomClassStyles = () => (
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
      labels={['Excellent', 'Good', 'Okay', 'Bad', 'Very Bad']}
      size="medium"
      reverse={true}
      className="custom-emoji-rating"
    />
  </div>
);