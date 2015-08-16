import React  from 'react';
import marked from 'marked';

export default class EditorPreview extends React.Component {
    render() {
        let rawHtml = marked(this.props.markdownText)
        return <span dangerouslySetInnerHTML={{__html: rawHtml}} />
    }
}
