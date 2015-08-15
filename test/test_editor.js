import assert     from 'power-assert';
import React      from 'react/addons';
import proxyquire from 'proxyquire';
import Editor     from '../src/editor.jsx';

var {TestUtils} = React.addons;

describe('Editorのテスト', function() {
    describe('propsのテスト', function(){
        before('render and locate element', () => {
            var renderedComponent = TestUtils.renderIntoDocument(
                <Editor rows="10" placeholder="プレースホルダ" />
            );
            var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
                renderedComponent, 'textarea'
            );
            this.inputElement = inputComponent.getDOMNode();
        });

        it('正常系: propsで渡した行数が一致', () => {
            assert(this.inputElement.getAttribute('rows') === "10")
        });

        it('正常系: propsで渡したplaceholderが一致', () => {
            assert(this.inputElement.getAttribute('placeholder') === "プレースホルダ")
        });
    });

    describe('stateのテスト', function() {
        it('正常系: textareaへの入力イベント', () => {
            var renderedComponent = TestUtils.renderIntoDocument(
                <Editor rows="10" placeholder="プレースホルダ" />
            );
            TestUtils.Simulate.change(
                TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'textarea'),
                {target: {value: '# Hello, world'}}
            );
            assert(React.findDOMNode(renderedComponent).textContent.indexOf("<h1>Hello World!</h1>") !== 1)
        });

        it('異常系: textareaへの入力イベント', () => {
            var renderedComponent = TestUtils.renderIntoDocument(
                <Editor rows="10" placeholder="プレースホルダ" />
            );
            let input = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'textarea')
            TestUtils.Simulate.change(input, {target: {value: '## Hello, world'}});
            assert(React.findDOMNode(renderedComponent).textContent.indexOf("<h1>Hello World!</h1>") !== 1)
        });
    });
});
