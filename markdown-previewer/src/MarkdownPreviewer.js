import React, {useState} from 'react';
import Markdown from 'marked-react';
import remarkGfm from 'remark-gfm';

const MarkdownPreviewer = (props) => {
  let [editorMode, changeMode] = useState('editor-small')
  const detectArr = Array.isArray(props.text) ? props.text : props.text.split('\n');

  const handleClick = () => {
    return editorMode === 'editor-small' ? changeMode('editor-big') : changeMode('editor-small');
  }

  return (
      <div className={`header-wrapper preview-wrapper ${editorMode}`}>
        <div className="preview-header">
          <h4>Previewer</h4>
          <div onClick={handleClick}>*</div>
        </div>
        <div className="preview-inner">
          {detectArr.map(text=>{
            return (<Markdown>{text}</Markdown>)
          })}
        </div>
      </div>
  )
}

export default MarkdownPreviewer;
