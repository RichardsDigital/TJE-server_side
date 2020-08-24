module.exports = function createTable(data) {
    const objNames = Object.keys(data);
    const addTags = objNames.map(name => `<tr><th><b>${name}:</b></th> <td>${data[name]}</td></tr>`);
    return (`<table> ${addTags.join(' ')} </table>`);
}