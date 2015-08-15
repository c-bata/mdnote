import assert        from 'power-assert';
import React         from 'react/addons';
import EditorPreview from '../src/editor_preview.jsx';

var {TestUtils} = React.addons;

describe('EditorPreviewのテスト', function() {
    it('正常系: 描画されたコンポーネントは指定したプロパティ値を持つ', () => {
        let myComponent = TestUtils.renderIntoDocument(<EditorPreview markdownText="# Hello" />)
        assert(myComponent.props.markdownText === "# Hello");
    });

    // ReactはHTMLに独自の属性を付加するのでmarkdownが変換されることは確認が難しい.
    it('正常系: 描画されたコンポーネントはpropsで渡した文字列を持つ', () => {
        let myComponent = TestUtils.renderIntoDocument(<EditorPreview markdownText="# Hello World" />)
        assert(React.findDOMNode(myComponent).textContent.indexOf("Hello World!") !== 1);
    });
});
