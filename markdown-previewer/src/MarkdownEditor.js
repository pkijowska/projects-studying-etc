import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer';

class MarkdownEditor extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'Arrosito con leche'
    }
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div class="form-group shadow-textarea">
          <label for="editor">Editor</label>
          <textarea onChange={this.handleOnChange} class="form-control z-depth-1" id="editor" rows="2" placeholder="Write something here...">{this.state.text}</textarea>
        </div>
        <MarkdownPreviewer text={this.state.text} />
      </div>
    )
  }
}

export default MarkdownEditor;
