import React from 'react'
import './editor.css'

function Markdown_Editor(props) {
    return (
        <div id="editor-box">
            <h1 className="title">Edit Markdown</h1>
            <textarea
                id="editor"
                value={props.value}
                onChange={props.onChange}
                />
        </div>
    )
}

export default Markdown_Editor
