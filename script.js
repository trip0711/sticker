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
    min-height: 510px;
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

/* --- スマートフォン横向き（ランドスケープ）に最適化 (一般的なスマートフォン幅 568px以上, 高さ480px以下) --- */
/* 例えば、iPhone SE横向き(568x320), iPhone 8横向き(667x375), iPhone X横向き(812x375) など */
@media (min-width: 568px) and (max-width: 896px) and (orientation: landscape) {
    body {
        margin-top: 10px; /* 上部のマージンをさらに減らす */
        padding-bottom: 50px;
        align-items: flex-start; /* 左寄せにすることで、コンテンツを横に並べやすくする */
        flex-direction: row; /* 横並びにする */
        flex-wrap: wrap; /* 必要であれば折り返す */
        justify-content: center; /* 中央に寄せる */
        gap: 20px; /* body直下の子要素間の隙間 */
    }

    h1 {
        width: 100%; /* タイトルが横幅いっぱいになるように */
        font-size: 1.6em; /* フォントサイズ調整 */
        margin-bottom: 10px; /* マージンを減らす */
    }

    #reloadButton,
    #darkModeToggle {
        font-size: 12px;
        padding: 6px 10px;
        top: 5px; /* 上からの位置をさらに調整 */
    }
    #reloadButton { left: 5px; }
    #darkModeToggle { right: 5px; }

    #initialImage {
        width: 70%; /* 横長画面に合わせて調整 */
        max-width: 500px; /* 最大幅を制限 */
        margin-bottom: 10px;
    }

    #imageContainerGroup {
        flex-direction: row; /* 横並びにする */
        flex-wrap: wrap; /* 3つ並ばない場合は折り返す */
        gap: 15px; /* 画像間の隙間を調整 */
        justify-content: center; /* 中央揃え */
        margin-bottom: 10px;
        width: auto; /* 内容に応じて幅を調整 */
    }

    .image-wrapper {
        width: calc(33% - 15px); /* 3列表示の計算（隙間も考慮） */
        /* または min-width を設定して固定 */
        min-width: 180px; /* 最低限の幅を確保 */
        max-width: 250px; /* 大きすぎないように制限 */
        min-height: auto; /* 高さ自動調整 */
        padding-bottom: 10px;
        padding-top: 5px;
        margin: 0; /* マージンをリセット */
    }

    .image-wrapper img {
        width: 90%; /* 親要素に合わせて調整 */
        max-width: 150px; /* 画像サイズを調整 */
    }

    .text-content {
        width: 95%; /* image-wrapperの幅に合わせて */
        min-height: 90px; /* 最小高さを調整 */
        font-size: 1.2em; /* フォントサイズを調整 */
        line-height: 1.2em;
        margin-top: 5px;
    }

    .text-content .line {
        padding-bottom: 2px;
        padding-top: 2px;
    }

    #changeImageButton {
        position: static; /* bodyのflexコンテナ内で静的に配置 */
        margin-top: 10px; /* 上部にマージンを追加 */
        padding: 8px 18px;
        font-size: 16px;
    }
}

/* さらに特定の小さな横向き（例: iPhone SE横向き） */
@media (min-width: 320px) and (max-width: 567px) and (orientation: landscape) {
    body {
        margin-top: 5px;
        padding-bottom: 40px;
    }

    h1 {
        font-size: 1.3em;
        margin-bottom: 5px;
    }

    #reloadButton,
    #darkModeToggle {
        font-size: 10px;
        padding: 5px 8px;
        top: 3px;
    }

    #initialImage {
        width: 80%;
        max-width: 300px;
        margin-bottom: 5px;
    }

    #imageContainerGroup {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }

    .image-wrapper {
        width: calc(50% - 10px); /* 2列表示の計算 */
        min-width: 150px;
        max-width: 200px;
        padding-bottom: 5px;
    }

    .image-wrapper img {
        width: 85%;
        max-width: 120px;
    }

    .text-content {
        min-height: 70px;
        font-size: 1.0em;
        line-height: 1.1em;
        margin-top: 3px;
    }

    #changeImageButton {
        padding: 6px 12px;
        font-size: 14px;
        margin-top: 5px;
    }
}
