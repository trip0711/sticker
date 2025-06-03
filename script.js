const GM = {
    // DOM要素の参照を保持
    initialImageElement: null,
    imageContainerGroup: null,
    imgElements: [],
    textContentElements: [],

    // 画像とテキストのデータを保持
    full_image_data: [],
    // 現在表示されている画像の元のテキストデータを保持（使用済み状態ではないもの）
    currentOriginalTexts: [], 

    // 定数定義
    INITIAL_IMAGE_PATH: 'img/intro.png',
    IMAGE_BASE_PATH: 'img/',

    /**
     * 初期化処理
     * DOM要素の取得とイベントリスナーの設定を行う
     */
    init: function() {
        // DOM要素の取得
        this.initialImageElement = document.getElementById("initialImage");
        this.imageContainerGroup = document.getElementById("imageContainerGroup");
        this.imgElements[0] = document.getElementById("displayImage0");
        this.imgElements[1] = document.getElementById("displayImage1");
        this.imgElements[2] = document.getElementById("displayImage2");
        this.textContentElements[0] = document.getElementById("textContent0");
        this.textContentElements[1] = document.getElementById("textContent1");
        this.textContentElements[2] = document.getElementById("textContent2");

        // 画像データの準備
        this.prepare_image_data(10);
        this.initialImageElement.src = this.INITIAL_IMAGE_PATH;

        // イベントリスナーの設定
        document.getElementById("changeImageButton").addEventListener("click", () => {
            this.ChangeImage();
        });
        document.getElementById("reloadButton").addEventListener("click", () => {
            window.location.reload();
        });
        document.getElementById("darkModeToggle").addEventListener("click", () => {
            document.body.classList.toggle('light-mode');
            const isLightMode = document.body.classList.contains('light-mode');
            localStorage.setItem('darkMode', isLightMode ? 'off' : 'on');
            document.getElementById("darkModeToggle").innerText = isLightMode ? 'ダークモード' : 'ライトモード';
        });

        // ダークモード設定の適用
        this.applySavedDarkModeSetting();
    },

    /**
     * 保存されたダークモード設定を適用する
     */
    applySavedDarkModeSetting: function() {
        const darkModeSetting = localStorage.getItem('darkMode');
        if (darkModeSetting === 'off') {
            document.body.classList.add('light-mode');
            document.getElementById("darkModeToggle").innerText = 'ダークモード';
        } else {
            document.body.classList.remove('light-mode');
            document.getElementById("darkModeToggle").innerText = 'ライトモード';
        }
    },

    /**
     * 画像データを準備する
     * @param {number} n - 画像の総数
     */
    prepare_image_data: function(n) {
        for (let i = 1; i <= n; i++) {
            let textContent = "";
            switch(i) {
                case 1: textContent = "Eldrazi(3)\nGuacamole(4)\nTightrope(3)"; break;
                case 2: textContent = "Trendy(2)\nCircus(2)\nPirate(3)"; break;
                case 3: textContent = "Misunderstood(4)\nTrapeze(2)\nElf(1)"; break;
                case 4: textContent = "Narrow-Minded(4)\nBaloney(4)\nFireworks(3)"; break;
                case 5: textContent = "Unsanctioned(5)\nAncient(3)\nJuggler(2)"; break;
                case 6: textContent = "Phyrexian(4)\nMidway(3)\nBamboozle(3)"; break;
                case 7: textContent = "Ancestral(2)\nHot Dog(1)\nMinotaur(4)"; break;
                case 8: textContent = "Playable(3)\nDelusionary(6)\nHydra(2)"; break;
                case 9: textContent = "Unassuming(3)\nGalatinous(5)\nSerpent(1)"; break;
                case 10: textContent = "Unglued(2)\nPea-Brained(3)\nDinosaur(4)"; break;
                default: textContent = `画像 ${i} のダミーテキスト。\n未定義の画像です。\n追加してください。`;
            }
            this.full_image_data.push({ src: `${this.IMAGE_BASE_PATH}${i}.png`, text: textContent });
        }
    },

    /**
     * 表示する画像をランダムに選択し、テキストを更新する
     * 初回表示時にも正しいハイライトが適用されるようにする
     */
    ChangeImage: function() {
        // 初期画像を非表示にし、画像グループを表示
        if (this.initialImageElement.style.display !== 'none') {
            this.initialImageElement.style.display = 'none';
            this.imageContainerGroup.style.display = 'flex';
        }

        // 画像データをシャッフル
        let shuffledData = [...this.full_image_data];
        for (let i = shuffledData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
        }

        const numDisplayImages = 3;
        if (shuffledData.length >= numDisplayImages) {
            this.currentOriginalTexts = []; // 新しく表示されるテキストを格納する配列を初期化

            // 各画像とテキストを設定
            for (let k = 0; k < numDisplayImages; k++) {
                this.imgElements[k].src = shuffledData[k].src;
                this.currentOriginalTexts[k] = shuffledData[k].text.split('\n'); // 元のテキストを保存
            }
            
            // 初回表示または再抽選時に、すべてのテキストを初期状態（使用済みなし）で更新
            // そして、全体の最大値に基づいてハイライトを適用
            this.updateAllDisplayedTexts(true); // ★ 引数trueで「使用済み」状態を無視して初期描画
        }
    },

    /**
     * テキスト行がクリックされたときの処理
     * 「使用済み」と元のテキストを切り替える。
     * 切り替え時に赤文字のハイライトを再評価し、全てのテキストを更新する。
     * @param {Event} event - クリックイベントオブジェクト
     */
    handleLineClick: function(event) {
        const clickedLine = event.currentTarget;
        const imageIndex = parseInt(clickedLine.dataset.imageIndex);
        const lineIndex = parseInt(clickedLine.dataset.lineIndex);

        // 「使用済み」状態を切り替える
        if (clickedLine.classList.contains('used')) {
            // 「使用済み」クラスを削除するだけ。表示内容はupdateAllDisplayedTextsで設定される
            clickedLine.classList.remove('used'); 
        } else {
            // 「使用済み」クラスを追加し、表示内容を直接設定。これはupdateAllDisplayedTextsで上書きされる可能性あり
            // clickedLine.innerHTML = "使用済み"; // この行は冗長になるので削除
            clickedLine.classList.add('used');
        }

        // 状態が変更されたので、全ての表示中のテキストを再評価し、ハイライトを更新
        this.updateAllDisplayedTexts(false); // ★ 通常クリックなのでfalse（現在の使用済み状態を考慮）
    },

    /**
     * 現在表示されている全てのテキストコンテンツを再評価し、ハイライトを適用する
     * この関数は、画像が切り替わった時とテキストがクリックされた時に呼び出される
     * @param {boolean} resetUsedStatus - trueの場合、既存の「使用済み」状態を無視して再描画する（初回表示用）
     */
    updateAllDisplayedTexts: function(resetUsedStatus = false) { // ★ 引数を追加
        let allNumbers = []; // 現在表示されているすべての行の数値と元のテキストを収集
        let currentUsedStates = []; // 各行の現在の「使用済み」状態を保持

        // まず、現在の「使用済み」状態を把握する
        for (let i = 0; i < this.textContentElements.length; i++) {
            currentUsedStates[i] = [];
            const lines = this.textContentElements[i].querySelectorAll('.line');
            lines.forEach((lineElement, lineIndex) => {
                // resetUsedStatusがtrueの場合は常にfalse（使用済みではない）とみなす
                currentUsedStates[i][lineIndex] = resetUsedStatus ? false : lineElement.classList.contains('used');
            });
        }

        // 「使用済み」ではない行のみから数値を抽出し、最大値を見つける
        for (let i = 0; i < this.currentOriginalTexts.length; i++) {
            this.currentOriginalTexts[i].forEach((originalLine, lineIndex) => {
                if (!currentUsedStates[i][lineIndex]) { // 「使用済み」ではない行のみ対象
                    const match = originalLine.match(/\((\d+)\)/);
                    const number = match ? parseInt(match[1], 10) : -1;
                    allNumbers.push({ number: number, imageIndex: i, lineIndex: lineIndex });
                }
            });
        }

        // 有効な数値（-1ではない）の中から最大値を見つける
        let maxNumber = -1;
        allNumbers.forEach(item => {
            if (item.number > maxNumber) {
                maxNumber = item.number;
            }
        });

        // 全てのテキストコンテンツを再レンダリング
        for (let i = 0; i < this.textContentElements.length; i++) {
            let processedHtml = '';
            this.currentOriginalTexts[i].forEach((originalLine, lineIndex) => {
                let displayLine = originalLine;
                let isUsed = currentUsedStates[i][lineIndex]; // 保持していた「使用済み」状態を使用

                if (isUsed) {
                    displayLine = "使用済み"; // 「使用済み」の場合は表示テキストを上書き
                } else {
                    // 「使用済み」ではない場合のみハイライトを適用
                    const match = originalLine.match(/\((\d+)\)/);
                    if (maxNumber >= 0 && match && parseInt(match[1], 10) === maxNumber) {
                        displayLine = originalLine.replace(/(\((\d+)\))/g, `<span class="highlight-red">$1</span>`);
                    }
                }
                
                // data-image-index と data-line-index を維持し、'used'クラスを動的に設定
                processedHtml += `<span class="line ${isUsed ? 'used' : ''}" data-image-index="${i}" data-line-index="${lineIndex}">${displayLine}</span>`;
            });
            this.textContentElements[i].innerHTML = processedHtml;

            // イベントリスナーを再設定 (innerHTMLの更新で失われるため)
            this.textContentElements[i].querySelectorAll('.line').forEach(lineElement => {
                lineElement.addEventListener('click', (event) => {
                    this.handleLineClick(event);
                });
            });
        }
    }
};

// DOMContentLoadedイベントで初期化処理を実行
document.addEventListener("DOMContentLoaded", () => {
    GM.init();
});