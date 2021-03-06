# mdnote

Markdownで書けるメモ帳

## 目的

勉強用. 主に以下のこと.

- ES6(Babel)
- testing(mocha, power-assert)
- React.js
- Electron


## 所感など

- React.js は感覚的には AngularJS よりしっくり来てる
    - とりあえずstateを変更すれば全部描画しなおしてくれるのすごい助かる。
    - AngularJSより優先して勉強したい
        - AngularJS でもこれぐらいならサクッと書けそうなんだけど、API多すぎてReact.jsに比べて覚えるの辛かった
        - Angular2.0でAPI大きく変更するらしいしそれよりはこちらを優先したい.
        - あとこれも感覚的なんだけど、AngularJS に比べて拡張するときにどこを書き直せばいいか分かりやすい
    - ES6 で書こうとするとところどころはまった。
        - [ここ](http://qiita.com/tell-k/items/a449f60ad3494fda00fa) にあることを最初からある程度読んでおいた方がいい


- power-assertとespower-babelすごくいい
    - power-assertのレポートは分かりやすい
    - 実装もテストもES6で書いてるんだけどコレ使えばうまく変換してくれる。

- ES6
    - アロー関数はcoffeescriptの影響かな？シンプルにかけていい
    - class構文は

- Electron

    予想以上に手軽。簡単にDesktopアプリに出来る。

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

- http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html

    mixinは現時点だとサポートされてない。ES6的に厳しいらしい。
    bindがどうのこうのはココにも書かれていた。

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

- http://jaketrent.com/post/testing-react-with-jsdom/

    jsdomのsetupを `dom.js` にまとめようとしたら `ReferenceError: navigator is not defined`
    って怒られたのが、コレのとおりにしたら治った

- http://foreignkey.jp/archives/763

    JavaScriptのthisの扱いについて分かりやすく解説されていた。

- http://codezine.jp/article/detail/8512?p=7

    まだちゃんと読んでないですが役立ちそう

#### Electron編

htmlを `index.html` にして、 `index.js` を用意。
後は `electron public` ってやれば動いてくれる。
手軽ですごくいい。

- http://qiita.com/nyanchu/items/15d514d9b9f87e5c0a29
- http://qiita.com/nyanchu/items/1dcd42ba6473f6afa575
- http://qiita.com/Quramy/items/90d61ff37ca1b95a7f6d
- http://qiita.com/Quramy/items/a4be32769366cfe55778