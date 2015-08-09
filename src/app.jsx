import React  from 'react';
import marked from 'marked';

class EditorPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "", placeholder: this.props.placeholder};
    }
    handleChange(event) {
        this.setState({text: event.target.value});
    }
    render() {
        let rawHtml = marked(this.state.text)
        return (
            <div className="editorBox">
                <textarea className="editor form-control"
                          onChange={this.handleChange}
                          placeholder={this.state.placeholder}>
                </textarea>
                <span>{this.state.text.length} 文字</span>
                <span dangerouslySetInnerHTML={{__html: rawHtml}} />
            </div>
        );
    }
};

React.render(
    <EditorPane placeholder="ここがノートです." />,
    document.getElementById('content')
);
