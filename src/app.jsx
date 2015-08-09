import React  from 'react';
import marked from 'marked';

var CommentBox = React.createClass({
    render: () => {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {markdown: 'This is *comment* written in **markdown**.'};
    }
    render() {
        let rawHtml = marked(this.state.markdown)
        return (
            <div className="commentList">
                <span dangerouslySetInnerHTML={{__html: rawHtml}} />
            </div>
        );
    }
};

var CommentForm = React.createClass({
    render: () => {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);
