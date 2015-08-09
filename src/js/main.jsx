import React from 'react';

var CommentBox = React.createClass({
    render: () => {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);

console.log('Hello');
