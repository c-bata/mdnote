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
    });
});
