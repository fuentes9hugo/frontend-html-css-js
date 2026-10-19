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
    localStorage.setItem("nick", nick.value);
    localStorage.setItem("difficulty", difficulty.value);
    localStorage.setItem("cardsNum", cardsNum.value);
    localStorage.setItem("avatar", avatar.src);
}


/**
 * Return user's data
 *
 * @export
 * @returns {{ nick: any; difficulty: any; cardsNum: any; avatar: any; }}
 */
export function getUserData() {
    return {
        nick: localStorage.getItem("nick"),
        difficulty: localStorage.getItem("difficulty"),
        cardsNum: localStorage.getItem("cardsNum"),
        avatar: localStorage.getItem("avatar")
    };
}

/**
 * Redirect to entry form if there is no nick name
 *
 * @export
 * @returns {boolean} 
 */
export function checkUserData() {
    if (localStorage.getItem("nick") == null) {
        localStorage.setItem("error", "Form not filled out correctly");
        return false;
    }
    return true;
}

/**
 * Add user's data to history
 *
 * @export
 * @param {*} nick
 */
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