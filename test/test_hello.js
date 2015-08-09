import assert     from 'power-assert';
import jsdom      from 'jsdom';
import React      from 'react/addons';

var TestUtils = React.addons.TestUtils;
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window   = document.parentWindow;

import HelloWorld from '../src/hello.jsx';

describe('HelloWorldのテスト', () => {
    it('Hello World!の文字を含んでいる', () => {
        var myComponent = TestUtils.renderIntoDocument(<HelloWorld />)
        assert(React.findDOMNode(myComponent).textContent.indexOf("Hello World!") !== 1);
    });
    it('秒隠されたコンポーネントは指定したプロパティ値{name: 入門React}を持っている', () => {
        var myComponent = TestUtils.renderIntoDocument(<HelloWorld name="入門React" />)
        assert(myComponent.props.name === "入門React");
    });
});
