import React  from 'react';
import EditorActions  from './actions/editor_actions'

export default class EditorInput extends React.Component {
    render() {
        return (
            <textarea onChange={EditorActions.updateMarkdown}
                      className={this.props.className}
                      placeholder={this.props.placeholder}
                      rows={this.props.rows} >
            </textarea>
        );
    }
};

EditorInput.propTypes = { onChange: React.PropTypes.func.isRequired };
