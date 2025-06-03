/* style.css */

body {
    background-color: black;
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    padding-bottom: 80px;
    transition: background-color 0.3s, color 0.3s;
}

h1 {
    margin-bottom: 30px;
}

#reloadButton {
    position: fixed;
    top: 20px;
    left: 20px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    z-index: 1000;
}

#darkModeToggle {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 5px;
    z-index: 1000;
}

#initialImage {
    width: 872px;
    height: 510px;
    object-fit: contain;
    margin-bottom: 30px;
    max-width: 90%; /* レスポンシブ対応 */
    height: auto; /* 高さを自動調整 */
}

#imageContainerGroup {
    display: none;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
    flex-wrap: wrap; /* 小さい画面で折り返す */
}

.image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25px;
    position: relative;
    min-height: 510px; /* スマートフォンでは調整が必要 */
    padding-top: 10px;
    width: 280px;
}

.image-wrapper img {
    width: 244px;
    height: 300px;
    object-fit: contain;
    cursor: default;
    max-width: 100%; /* 親要素の幅に合わせて縮小 */
    height: auto; /* 高さを自動調整 */
}

.used-status {
    margin-top: 5px;
    font-size: 2.5em;
    font-weight: bold;
    color: yellow;
    visibility: hidden;
    position: absolute;
    bottom: 5px;
}

.text-content {
    width: 280px;
    height: 150px;
    margin-top: 10px;
    font-size: 2.0em;
    line-height: 1.3em;
    text-align: center;
    overflow: hidden;
    color: #eee;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.text-content .line {
    display: block;
    cursor: pointer;
    transition: opacity 0.3s, color 0.3s;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    padding-bottom: 5px;
    padding-top: 5px;
}

.text-content .line:last-child {
    padding-bottom: 0;
}

.text-content .line.used {
    color: yellow;
    font-size: 0.8em;
    opacity: 0.8;
    cursor: pointer;
}

.highlight-red {
    color: red;
}

#changeImageButton {
    position: fixed;
    bottom: 20px;
    padding: 15px 30px;
    font-size: 22px;
    cursor: pointer;
    z-index: 1000;
}

/* Light mode styles */
body.light-mode {
    background-color: white;
    color: black;
}

body.light-mode h1 {
    color: black;
}

body.light-mode .text-content {
    color: #333;
}

body.light-mode #reloadButton {
    background-color: #6c757d;
    color: white;
}

body.light-mode #darkModeToggle {
    background-color: #007bff;
    color: white;
}

body.light-mode #changeImageButton {
    background-color: #007bff;
    color: white;
}

body.light-mode .used-status {
    color: orange;
}

body.light-mode .highlight-red {
    color: #cc0000;
}

body.light-mode .text-content .line.used {
     color: orange;
}


/* --- スマートフォン向けスタイル (最大画面幅 768px) --- */
@media (max-width: 768px) {
    body {
        margin-top: 20px; /* 上部のマージンを減らす */
        padding-bottom: 60px; /* 下部のパディングを減らす */
    }

    h1 {
        font-size: 1.8em; /* タイトルを小さく */
        margin-bottom: 20px;
    }

    #reloadButton,
    #darkModeToggle {
        font-size: 14px; /* ボタンの文字を小さく */
        padding: 8px 12px; /* ボタンのパディングを減らす */
        top: 10px; /* 上からの位置を調整 */
    }

    #initialImage {
        width: 100%; /* 画面幅いっぱいに */
        max-width: 400px; /* 最大幅を設定して大きくなりすぎないように */
        height: auto; /* 高さを自動調整 */
        margin-bottom: 20px;
    }

    #imageContainerGroup {
        flex-direction: column; /* 縦並びにする */
        gap: 20px; /* 縦方向の隙間を調整 */
        width: 100%; /* 親要素の幅に合わせて100%に */
    }

    .image-wrapper {
        width: 90%; /* 画面幅の90%を使用 */
        max-width: 320px; /* デスクトップ時の280pxより少しだけ余裕を持たせる、または固定 */
        min-height: auto; /* 最小高さを自動調整 */
        padding-top: 5px; /* 上部のパディングを減らす */
        padding-bottom: 15px; /* 下部のパディングを減らす */
        margin: 0 auto; /* 中央揃え */
    }

    .image-wrapper img {
        width: 80%; /* image-wrapperの幅に合わせて縮小 */
        height: auto; /* 高さを自動調整 */
        max-width: 200px; /* 画像が大きくなりすぎないように調整 */
    }

    .text-content {
        width: 90%; /* image-wrapperの幅に合わせて90%を使用 */
        max-width: 280px; /* 固定幅を維持したい場合はmax-widthを使用 */
        height: auto; /* テキストの高さは内容に応じて自動調整 */
        min-height: 120px; /* 最低限の高さは確保 */
        font-size: 1.5em; /* フォントサイズを調整 */
        margin-top: 5px; /* 上部のマージンを減らす */
        padding: 5px 0; /* パディングを調整 */
    }

    .text-content .line {
        padding-bottom: 3px; /* 行間のパディングを減らす */
        padding-top: 3px;
    }

    #changeImageButton {
        padding: 10px 20px; /* ボタンのパディングを減らす */
        font-size: 18px; /* ボタンの文字を小さく */
        bottom: 10px; /* 下からの位置を調整 */
    }
}

/* さらに小さな画面（例: iPhone SEなど）向けの調整 */
@media (max-width: 480px) {
    h1 {
        font-size: 1.5em;
    }

    #reloadButton,
    #darkModeToggle {
        font-size: 12px;
        padding: 6px 10px;
    }

    .image-wrapper {
        width: 95%; /* さらに幅を広げる */
        max-width: 280px; /* 幅を280pxに固定したい場合 */
    }

    .text-content {
        width: 95%; /* image-wrapperの幅に合わせて95%を使用 */
        max-width: 280px; /* 幅を280pxに固定したい場合 */
        font-size: 1.4em; /* フォントサイズをさらに調整 */
        min-height: 100px; /* さらに最小高さを減らす */
    }

    .image-wrapper img {
        max-width: 180px; /* 画像サイズをさらに小さく */
    }

    #changeImageButton {
        font-size: 16px;
        padding: 8px 15px;
    }
}
