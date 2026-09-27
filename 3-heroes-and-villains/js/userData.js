/*
 * JS for the user's data management
 *
 * @author Hugo Fuentes <fuentes9hugo@gmail.com>
 * @link https://github.com/fuentes9hugo/frontend-html-css-js/tree/master/3-heroes-and-villains GitHub
 */


/**
 * Set user's data in session storage
 *
 * @export
 * @param {*} nick 
 * @param {*} difficulty 
 * @param {*} cardsNum 
 * @param {*} avatar 
 */
export function userData(nick, difficulty, cardsNum, avatar) {
    sessionStorage.setItem("nick", nick.value);
    sessionStorage.setItem("difficulty", difficulty.value);
    sessionStorage.setItem("cardsNum", cardsNum.value);
    sessionStorage.setItem("avatar", avatar.src);
}


/**
 * Return user's data
 *
 * @export
 * @returns {{ nick: any; difficulty: any; cardsNum: any; avatar: any; }} 
 */
export function getUserData() {
    return {
        nick: sessionStorage.getItem("nick"),
        difficulty: sessionStorage.getItem("difficulty"),
        cardsNum: sessionStorage.getItem("cardsNum"),
        avatar: sessionStorage.getItem("avatar")
    };
}


export function userHistory(nick) {
    const historyStorage = localStorage.getItem("history");
    let history;

    if (historyStorage == null) {
        history = [];
    } else {
        history = JSON.parse(historyStorage);
    }

    const userRecord = {
        user: nick.value,
        date: Date.now()
    }

    history.push(userRecord);

    localStorage.setItem("history", JSON.stringify(history));
}