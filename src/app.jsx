import React  from 'react';
import marked from 'marked';

class EditorPane extends React.Component {
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
        let rawHtml = marked(this.state.text)
        return (
            <div className="editorBox">
                <textarea className="editor form-control"
                          onChange={this.handleChange.bind(this)}
                          placeholder={this.state.placeholder}
                          rows={this.state.rows}>
                </textarea>
                <span dangerouslySetInnerHTML={{__html: rawHtml}} />
                <span>{this.state.text.length} 文字</span>
            </div>
        );
    }
};

React.render(
    <EditorPane placeholder="ここがノートです." rows="20" />,
    document.getElementById('content')
);
