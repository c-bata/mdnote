import React  from 'react';

export default class EditorInput extends React.Component {
    _onChange(event) {
        this.props.onChange(event.target.value);
    }
    render() {
        return (
            <textarea onChange={this._onChange.bind(this)}
                      className="editor form-control"
                      placeholder={this.props.placeholder}
                      rows={this.props.rows} >
            </textarea>
        );
    }
};

EditorInput.propTypes = { onChange: React.PropTypes.func.isRequired };
