const $ = require('jquery');
const Quill = require('quill');

$(document).ready(() => {
    console.log('ready!');
    var quill = new Quill('#editor', {
        theme: 'snow'
    });
    quill.on('editor-change', () => {
        console.log(quill.getContents());
    });
});
