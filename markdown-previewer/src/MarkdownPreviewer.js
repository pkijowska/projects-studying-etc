import React from 'react';

const MarkdownPreviewer = (props) => {
  return (
    <div>
    <div dangerouslySetInnerHTML={{__html: props.text}}/>
    </div>
  )
}

export default MarkdownPreviewer;
