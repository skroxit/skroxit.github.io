
(document.querySelector('#btn')).onclick = foo;

const {
    InlineEditor,
    Essentials,
    Bold,
    Italic,
    Font,
    Paragraph
} = CKEDITOR;

function foo() {
    let instance;
    const el = document.querySelector('#editor');

    InlineEditor
        .create(el, {
            licenseKey: 'GPL',
            plugins: [Essentials, Bold, Italic, Font, Paragraph],
            toolbar: [
                'undo', 'redo', '|', 'bold', 'italic', '|',
                'undo', 'redo', '|', 'bold', 'italic', '|',
                'undo', 'redo', '|', 'bold', 'italic', '|',
                'undo', 'redo', '|', 'bold', 'italic', '|',
                'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
            ],
        })
        .then(editorInstance => {
            instance = editorInstance;
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            instance?.editing.view.focus();
        });
}