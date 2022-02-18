import React from 'react';

const MarkdownPreviewer = (props) => {
  console.log(props.text)
  return (
    <div>{props.text}</div>
  )
}

export default MarkdownPreviewer;
