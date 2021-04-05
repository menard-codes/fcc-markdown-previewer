import React from 'react'
import './previewer.css';

function Markdown_Previewer(props) {
    return (
        <div id="preview">
            <h1 className="title">Markdown Preview</h1>
            <div
                dangerouslySetInnerHTML={{__html: props.value}}
                id="markdown-preview" />
        </div>
    )
}

export default Markdown_Previewer
