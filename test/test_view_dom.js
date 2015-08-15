import assert     from 'power-assert';
import React      from 'react/addons';
import proxyquire from 'proxyquire';
import Editor     from '../src/editor.jsx';

var TestUtils = React.addons.TestUtils;

describe('Editorのテスト', () => {
    it('正常系:レンダリング', () => {
        TestUtils.renderIntoDocument(<Editor />);
    });
});
