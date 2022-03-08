import React, {useState} from 'react';
import Markdown from 'marked-react';
import remarkGfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';


const MarkdownPreviewer = (props) => {
  let [editorMode, changeMode] = useState({editor: 'editor-small', icon: faMaximize})
  const detectArr = Array.isArray(props.text) ? props.text : [props.text];

  const handleClick = () => {
    return editorMode.editor === 'editor-small' ? changeMode({editor: 'editor-big', icon: faMinimize}) : changeMode({editor: 'editor-small', icon: faMaximize});
  }

  return (
      <div className={`header-wrapper preview-wrapper ${editorMode.editor}`}>
        <div className="preview-header">
          <h4>Previewer</h4>
          <div onClick={handleClick}><FontAwesomeIcon icon={editorMode.icon} />
          </div>
        </div>
        <div className="preview-inner">
          {detectArr.map(text=>{
            console.log(text)
            return (<Markdown remarkPlugins={[remarkGfm]} children={text}></Markdown>)
          })}
        </div>
      </div>
  )
}

export default MarkdownPreviewer;
