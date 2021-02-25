const followToggle = require("./follow_toggle");

$(() => {
    const el = $("");

    const $buttons = $("button.follow-toggle");
    $buttons.each( function (idx, button) {
        const $button = $("button")
        new followToggle($button); 
    })
})