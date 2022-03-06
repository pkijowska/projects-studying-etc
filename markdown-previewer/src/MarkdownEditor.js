import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer';
import Markdown from 'marked-react';
import remarkGfm from 'remark-gfm';

class MarkdownEditor extends React.Component {
  constructor() {
    super()
    this.state = {
      text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.`
    }
  }

  handleOnChange = (e) => {
    let splitText = e.target.value.split('\n');
    this.setState({
            text: splitText
          },() => {
            console.log(this.state.text, 'check for state')
    })
  }

  render() {
    const finalText = this.state.text;
    return (
      <div className="form">
        <div className="form-group shadow-textarea">
          <div className="header-wrapper">
              <label for="editor">
                <h4>Editor</h4>
              </label>
            <textarea onChange={this.handleOnChange} className="form-control z-depth-1" id="editor" rows="2" placeholder="Write something here..." >{finalText}</textarea>
          </div>
        </div>
        <hr/>
        <MarkdownPreviewer options={this.options} text={this.state.text} />
      </div>
    )
  }
}

export default MarkdownEditor;
