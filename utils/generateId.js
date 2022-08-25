const generateNum = function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const generateLowerCase = function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const generateUpperCase = function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const generateId = function() {
    const idLength = 12;
    let id = '';

    for(let i = 0; i < idLength; i++) {
        let charType = Math.floor(Math.random() * 3);

        if(charType === 0) {
            id += generateNum();
        }
        else if (charType === 1) {
            id += generateLowerCase();
        }
        else if (charType === 2) {
            id += generateUpperCase();
        }
    }

    return id;
};

module.exports = {
    generateId
};