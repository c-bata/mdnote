import assert     from 'power-assert';
import jsdom      from 'jsdom';
import React      from 'react/addons';

var TestUtils = React.addons.TestUtils;
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window   = document.parentWindow;

import HelloWorld from '../src/hello.jsx';

describe('Componentのテスト', () => {
    it('正常系：レンダリング', () => {
        TestUtils.renderIntoDocument(<HelloWorld></HelloWorld>)
    });
});
