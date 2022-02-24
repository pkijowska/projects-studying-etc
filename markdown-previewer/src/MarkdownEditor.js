import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer';

class MarkdownEditor extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ['# Welcome to my React Markdown Previewer!', '\n## This is a subheading']
    }
  }

  componentDidMount() {
    this.checkForHeadOne()
  }

  checkForHeadOne = () => {
    console.log(this.state.text, 'before txt')
    let text = [...this.state.text];
    text.forEach((el, i)=>{
      if (el.includes('# ')) {
        const newValue = text[i].replace('# ','');
        if (!text[i].includes('<h1>')) {
            text[i] = `<h1> ${text[i]} </h1>`
        }
        this.setState({
          text: text
        })
      }
    })
  }

  handleOnChange = (e) => {
    let splitText = e.target.value.split('\n');
    splitText.forEach((el, i)=>{
      if (el.includes('# ')) {
        const newValue = splitText[i].replace('# ','');
        splitText[i] = newValue
        if (!splitText[i].includes('<h1>')) {
            splitText[i] = `<h1> ${splitText[i]} </h1>`
        }
        this.setState({
          text: splitText
        })
      }
    })
  }

  render() {
    const final = this.state.text.join('');
    return (
      <div>
        <div class="form-group shadow-textarea">
          <label for="editor">Editor</label>
          // <div dangerouslySetInnerHTML={{__html: '<p>this is test</p>'}}/>
          <textarea onChange={this.handleOnChange} class="form-control z-depth-1" id="editor" rows="2" placeholder="Write something here..." >{final}
          </textarea>
        </div>
        <MarkdownPreviewer text={this.state.text} />
      </div>
    )
  }
}

export default MarkdownEditor;
