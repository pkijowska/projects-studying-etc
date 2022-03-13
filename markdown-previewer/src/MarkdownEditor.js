import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer.js';
import Markdown from 'marked-react';
import remarkGfm from 'remark-gfm';

class MarkdownEditor extends React.Component {
  constructor() {
    super()
    this.state = {
      text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

  1. And there are numbered lists too....
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
    }
  }

  handleOnChange = (e) => {
    const textValue = e.target.value;
    this.setState({
            text: textValue
          },() => {
            console.log(this.state.text, 'check for state')
    })
  }

  render() {
    return (
      <div className="form">
        <div className="form-group shadow-textarea">
          <div className="header-wrapper">
              <label for="editor">
                <h4>Editor</h4>
              </label>
            <textarea onChange={this.handleOnChange} className="form-control z-depth-1" id="editor" rows="2" placeholder="Write something here..." >{this.state.text}</textarea>
          </div>
        </div>
        <hr/>
        <MarkdownPreviewer text={this.state.text} />
      </div>
    )
  }
}

export default MarkdownEditor;
