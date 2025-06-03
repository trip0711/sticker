/* style.css */

body {
    background-color: black;
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
    color: white;
    display: flex;
    flex-direction: column; /* ★ 縦並びに戻す */
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
    max-width: 90%;
    height: auto;
}

#imageContainerGroup {
    display: none;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    width: 100%; /* ★ デスクトップ時もflexコンテナとして100%幅を使う */
}

.image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25px;
    position: relative;
    min-height: 510px;
    padding-top: 10px;
    width: 280px;
}

.image-wrapper img {
    width: 244px;
    height: 300px;
    object-fit: contain;
    cursor: default;
    max-width: 100%;
    height: auto;
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


/* --- スマートフォン向けスタイル (最大画面幅 768px, 縦向きがメイン) --- */
@media (max-width: 768px) {
    body {
        margin-top: 20px;
        padding-bottom: 60px;
    }

    h1 {
        font-size: 1.8em;
        margin-bottom: 20px;
    }

    #reloadButton,
    #darkModeToggle {
        font-size: 14px;
        padding: 8px 12px;
        top: 10px;
    }

    #initialImage {
        width: 100%;
        max-width: 400px;
        height: auto;
        margin-bottom: 20px;
    }

    #imageContainerGroup {
        flex-direction: column; /* 縦並びにする */
        gap: 20px;
        width: 100%;
    }

    .image-wrapper {
        width: 90%;
        max-width: 320px;
        min-height: auto;
        padding-top: 5px;
        padding-bottom: 15px;
        margin: 0 auto;
    }

    .image-wrapper img {
        width: 80%;
        height: auto;
        max-width: 200px;
    }

    .text-content {
        width: 90%;
        max-width: 280px;
        height: auto;
        min-height: 120px;
        font-size: 1.5em;
        margin-top: 5px;
        padding: 5px 0;
    }

    .text-content .line {
        padding-bottom: 3px;
        padding-top: 3px;
    }

    #changeImageButton {
        padding: 10px 20px;
        font-size: 18px;
        bottom: 10px;
    }
}

/* --- スマートフォン横向き（ランドスケープ）に最適化 (一般的なスマートフォン幅 568px以上) --- */
/* 例: iPhone SE横向き(568x320), iPhone 8横向き(667x375), iPhone X横向き(812x375) など */
@media (min-width: 568px) and (orientation: landscape) { /* ★ max-width条件を緩和 */
    body {
        margin-top: 15px; /* 上部のマージンを調整 */
        padding-bottom: 50px;
        /* bodyはflex-direction: columnのまま維持 */
    }

    h1 {
        font-size: 1.6em;
        margin-bottom: 15px;
    }

    #reloadButton,
    #darkModeToggle {
        font-size: 13px;
        padding: 7px 11px;
        top: 8px;
    }
    #reloadButton { left: 10px; }
    #darkModeToggle { right: 10px; }

    #initialImage {
        width: 70%;
        max-width: 600px; /* ★ より大きい横幅にも対応 */
        margin-bottom: 15px;
    }

    #imageContainerGroup {
        flex-direction: row; /* ★ 横並びにする */
        flex-wrap: wrap;
        gap: 15px; /* 画像間の隙間を調整 */
        justify-content: center;
        margin-bottom: 15px;
        width: 100%; /* 利用可能な幅を最大限に利用 */
    }

    .image-wrapper {
        /* 横並びで3つ収まるように計算 (gap15px x 2 = 30px を引く) */
        width: calc(33.33% - 15px); /* ★ 3列表示を目指す */
        min-width: 180px; /* 最低限の幅を確保 */
        max-width: 250px; /* 大きすぎないように制限 */
        min-height: auto;
        padding-bottom: 10px;
        padding-top: 5px;
        margin: 0; /* マージンをリセット */
    }

    .image-wrapper img {
        width: 90%;
        max-width: 150px; /* 画像サイズを調整 */
    }

    .text-content {
        width: 95%;
        min-height: 90px;
        font-size: 1.2em;
        line-height: 1.2em;
        margin-top: 5px;
    }

    .text-content .line {
        padding-bottom: 2px;
        padding-top: 2px;
    }

    #changeImageButton {
        padding: 12px 25px; /* ボタンのサイズを少し大きく */
        font-size: 20px;
        bottom: 15px;
    }
}

/* --- さらに小さな横向き画面（例: iPhone SE横向き 567px以下） --- */
@media (max-width: 567px) and (orientation: landscape) { /* ★ max-width条件を追加 */
    body {
        margin-top: 10px;
        padding-bottom: 40px;
    }

    h1 {
        font-size: 1.4em;
        margin-bottom: 10px;
    }

    #reloadButton,
    #darkModeToggle {
        font-size: 11px;
        padding: 6px 9px;
        top: 5px;
    }

    #initialImage {
        width: 90%;
        max-width: 350px;
        margin-bottom: 10px;
    }

    #imageContainerGroup {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }

    .image-wrapper {
        /* 2列表示の計算 (gap10px x 1 = 10px を引く) */
        width: calc(50% - 10px); /* ★ 2列表示を目指す */
        min-width: 140px;
        max-width: 200px;
        padding-bottom: 8px;
    }

    .image-wrapper img {
        width: 90%;
        max-width: 120px;
    }

    .text-content {
        min-height: 80px;
        font-size: 1.1em;
        line-height: 1.1em;
        margin-top: 3px;
    }

    #changeImageButton {
        padding: 10px 20px;
        font-size: 16px;
        bottom: 10px;
    }
}
