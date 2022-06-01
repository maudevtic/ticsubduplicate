const options = {
    byRow: true,
    property: 'height',
    target: null,
    remove: false
}
$(function() {
    $('.content-box').matchHeight(options);
});