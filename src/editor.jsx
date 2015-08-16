import React          from 'react';
import {AltContainer} from 'alt';

import EditorPreview  from './editor_preview.jsx';
import EditorInput    from './editor_input.jsx';

import EditorActions  from './actions/editor_actions'
import EditorStore    from './stores/editor_store'


class EditorView extends React.Component {
    render() {
        return (
            <div className="editor-container">
                <div className="row">
                    <div className="col-sm-6">
                        <EditorInput className="editor form-control"
                                     placeholder="Markdown形式の文書を入力して下さい。"
                                     rows="10" />
                    </div>
                    <div className="col-sm-6">
                        <EditorPreview markdownText={this.props.markdown} />
                    </div>
                </div>
                <span>現在 {this.props.markdown.length} 文字</span>
            </div>
        );
    }
};

export default class Editor extends React.Component {
    render() {
        return (
            <div>
                <AltContainer store={EditorStore}>
                    <EditorView  />
                </AltContainer>
            </div>
        );
    }
};
