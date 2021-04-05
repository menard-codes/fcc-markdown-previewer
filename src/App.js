import React, { Component } from 'react';
import Header from './components/Header/Header_Component';
import Editor from './components/Editor/Markdown_Editor';
import Previewer from './components/Previewer/Markdown_Previewer';
import './App.css';


const default_markdown = `
# Sample Markdown
### by Menard Maranan

*you can edit this markdown*

# Factorial using Python and Recursion
Factorial in Math is equivalent to \`x! = x * x-1 * ... 1\`.
Here's how to solve it recursively in [Python](https://www.python.org):
\`\`\`
def factorial(num):
  if num == 1:
    return 1
  return num * factorial(num-1)
\`\`\`

# Learning is better with Doing

>*Tell me and I forget.*
>
>*Teach me and I remember.*
>
>*Involve me and I learn.*
>
>-Benjamin Franklin


`

class App extends Component {
  constructor(props) {
    super(props)

    // give this default raw markdown later
    this.state = {
      text: default_markdown
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  render() {
    const text = this.state.text;
    const marked = require("marked");
    const markdown = marked(text);
    return (
      <div id="App">
        <Header />
        <Editor value={text} onChange={this.handleChange} />
        <Previewer value={markdown} />
      </div>
    )
  }

}

export default App;
