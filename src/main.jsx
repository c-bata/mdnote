import React  from 'react';
import Editor from './components/editor.jsx';

React.render(
    <Editor placeholder="ここがノートです." rows="20" />,
    document.getElementById('content')
);
