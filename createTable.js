module.exports = function createTable(data) {

    const html = [];

    const createKeys = (obj) => {
        return Object.keys(obj);
    }

    const cleanAndCapitalize = (word) => {
        const cleanChar = (word.charAt(0).toUpperCase() + word.slice(1)).replace(/_/g, ' ');
        return cleanChar;
    }

    const searchObj = (data) => {
        createKeys(data).forEach((key) => {
            if (typeof data[key] === 'object') {
                html.push(`<tr><td><b>${cleanAndCapitalize(key)}</b></td></tr>`);
                searchObj(data[key]);
            }
            if (typeof data[key] === 'string') {
                html.push(`<tr><td>${cleanAndCapitalize(key)}</td><td>${data[key]}</td></tr>`)
            }
        });
    }

    searchObj(data);

    const styles = '<style> table, td { border: 1px solid black; border-collapse: collapse;} td { padding: 5px} </style>'

    return (`${styles} <table>${html.join('')}</table>`);
};