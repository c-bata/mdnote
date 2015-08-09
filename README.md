# mdnote

Markdownで書けるメモ帳

## 目的

勉強用. 主に以下のこと.

- ES6(Babel)
- testing(power-assert)
- React.js
- Electron


## 参考資料

- https://facebook.github.io/react/docs/tutorial-ja-JP.html
    公式チュートリアル。あまり読まなかった.

- http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/
    めちゃくちゃ分かりやすいReact.jsのチュートリアル。コレをベースにMarkdown Editor実装.

- http://sadah.hatenablog.com/entry/2015/08/03/085828
    ES6で書くときにハマるところが多いのですが、この記事に何度も助けられました。
    
    ```
    // ES6でイベントリスナーを設定する場合、 .bind(this) を追加.
    onChange={this.handleChange.bind(this)}
    ```

- http://qiita.com/sugarshin/items/3ce64420b0181990480e
    exportのあたりを参考にさせていただきました。

- http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/ の Step4-Step6
    ES6の説明が簡潔で良かったです。Fluxとかは英語読むの辛かったのでWeb+DB naoyaさんの記事を読みました。

- http://qiita.com/M-ISO/items/6c8b97a9447ccfe9a1f6
    stateとpropsについて簡潔にまとまっていて分かりやすかったです

#### テスト編

- 入門React
    テストの章は解説も丁寧で助かった。これをベースに勉強していく.

- http://qiita.com/uryyyyyyy/items/0161aaacff981de918e5
    global.documentのところでハマりました。jsdom使ってやるっぽいです。
    
    ```
    import jsdom      from 'jsdom';
    global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
    global.window   = document.parentWindow;
    ```

- http://codezine.jp/article/detail/8512?p=7
    まだちゃんと読んでないですが役立ちそう
