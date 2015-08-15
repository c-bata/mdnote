import React         from 'react';
import EditorPreview from './editor_preview.jsx';
import EditorInput   from './editor_input.jsx';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: "",
            placeholder: this.props.placeholder,
            rows: this.props.rows
        };
    }
    updateMarkdown(markdown) {
        this.setState({markdown: markdown});
    }
    render() {
        return (
            <div className="editor-container">
                <div className="row">
                    <div className="col-sm-6">
                        <EditorInput onChange={this.updateMarkdown.bind(this)}
                                     className="editor form-control"
                                     placeholder={this.state.placeholder}
                                     rows={this.state.rows} />
                    </div>
                    <div className="col-sm-6">
                        <EditorPreview markdownText={this.state.markdown} />
                    </div>
                </div>
                <span>現在 {this.state.markdown.length} 文字</span>
            </div>
        );
    }
};
