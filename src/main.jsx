import React  from 'react';
import Editor from './components/editor.jsx';

React.render(
    <Editor placeholder="ここがノートです." rows="30" />,
    document.getElementById('content')
);
