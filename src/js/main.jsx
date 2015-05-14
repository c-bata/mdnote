import React from 'react';

const HelloMessage = React.createClass({
    render() {
        return <div>Hello {this.props.name}</div>;
    }
});

React.render(
    <HelloMessage name="Masashi" />,
    document.getElementById('app-container')
);
