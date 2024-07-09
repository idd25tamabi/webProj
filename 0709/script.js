// .menuクラスを持つ要素を取得
const menu = document.querySelector('.menu')
console.log(menu)

// menuがクリックされたときのイベントリスナーを追加
menu.addEventListener('click', () => {
    // .discoverクラスを持つ要素を取得
    const discover = document.querySelector('.discover')
    // displayをflexに設定
    discover.style = 'display:flex'
})

// 各セクションの要素を取得
const home = document.querySelector('.home')
const about = document.querySelector('.about')
const work = document.querySelector('.work')
const contact = document.querySelector('.contact')

// home要素のテキストを取得
const homeText = home.innerText;
// homeテキストの長さを取得
const homeTextLength = homeText.length;
// DOM要素を格納する配列
let domArray = []
// homeテキストを1文字ずつ<div>要素に分割して配列に追加
for (let index = 0; index < homeTextLength; index++) {
    domArray.push(`<div>${homeText.substring(index, index + 1)}</div>`)
}

// home要素の内容を更新
home.innerHTML = domArray.join('');

// home要素にマウスが入ったときのイベントリスナーを追加
home.addEventListener("mouseenter", () => {
    const homeText = home.innerText;
    const homeTextLength = homeText.length;
    // home要素の各文字に対して処理を実行
    for (let index = 0; index < homeTextLength; index++) {
        const one = home.getElementsByTagName("div")[index];
        if (!one) {
            return;
        }
        console.log("@@ one", one);
        const oneText = one.innerText;

        // 各文字をランダムな文字に変化させる処理を実行
        for (let i = 0; i < index + 1; i++) {
            nextNumABC(i + 3, one, oneText);
            console.log(oneText)
        }
    }
});

// num回ランダムな文字に変化させる関数
function nextNumABC(num, one, abc) {
    if (num > 0) {
        num = num - 1;
        const thisText = randomABC();
        one.innerText = thisText;
        setTimeout(() => {
            nextNumABC(num, one, abc);
        }, 100)
    } else {
        one.innerText = abc;
    }
}

// ランダムなアルファベットを返す関数
function randomABC() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = Math.floor(Math.random() * letters.length);
    const thisText = letters.substring(number, number + 1);
    return thisText;
}



