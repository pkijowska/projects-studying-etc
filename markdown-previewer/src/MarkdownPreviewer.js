import React from 'react';
import Markdown from 'marked-react';

const MarkdownPreviewer = (props) => {
  return (
    <div>
    {props.text.map(text=>{
      return (<Markdown>{text}</Markdown>)
    })}
    </div>
  )
}

export default MarkdownPreviewer;
