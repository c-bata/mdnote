import React  from 'react';
import EditorPreview from './editor_preview.jsx';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            placeholder: this.props.placeholder,
            rows: this.props.rows
        };
    }
    handleChange(event) {
        this.setState({text: event.target.value});
    }
    render() {
        return (
            <div className="editor-container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea className="editor form-control"
                                  onChange={this.handleChange.bind(this)}
                                  placeholder={this.state.placeholder}
                                  rows={this.state.rows}>
                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <EditorPreview markdownText={this.state.text} />
                    </div>
                </div>
                <span>現在 {this.state.text.length} 文字</span>
            </div>
        );
    }
};
