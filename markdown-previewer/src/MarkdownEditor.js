import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer';
import Markdown from 'marked-react';

class MarkdownEditor extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ['# Welcome to my React Markdown Previewer!', '\n## This is a subheading','\n### This is another subheading', '\nHeres some code, `<div> Hello</div>`, between 2 backticks.', '- And of course there are lists.  - Some are bulleted.  - With different indentation levels. - That look like this.', 'You can also make text **bold**... whoa!Or _italic_. Or... wait for it... **_both!_** And feel free to go crazy ~~crossing stuff out~~.']
    }
  }

  componentDidMount() {

  }

  handleOnChange = (e) => {
    let splitText = e.target.value.split('\n');
    this.setState({
            text: splitText
          },() => {
            console.log(this.state.text, 'checlforcode')
    })

  }

  render() {
    const final = this.state.text.join(',');
    return (
      <div>
        <div className="form-group shadow-textarea">
          <label for="editor">Editor</label>
          <textarea onChange={this.handleOnChange} className="form-control z-depth-1" id="editor" rows="2" placeholder="Write something here..." >{final}</textarea>
        </div>
        <MarkdownPreviewer text={this.state.text} />
      </div>
    )
  }
}

export default MarkdownEditor;
