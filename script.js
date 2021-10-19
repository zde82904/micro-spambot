"use strict";
// Finds Message Bar
let $in = $(`#${findChat()}`).find('> div');
// Message you want to send
let message = 'yes';
// Amount of Messages you want to send
let num = 150;
//The Looping
for (let i = 0; i < num; i++) {
    $in.html(message);
    $('#send-message-button').click();
}
function findChat() {
    let name = []; // Array because it can return more than one element
    document
        .querySelectorAll('div[id^="cke_"]')
        .forEach(e => {
            if (e.id.includes('contents') && !e.style.cssText.includes('height: 0px') && !e.style.cssText.includes('width: 0px')) {
                name.push(e.id);
            };
        });
    return name[0]; // First element always should be the right one
}

// Credits
// Script by Roki written at 26.10.2020
// Script Altered and Improved by Zde82904 on 19.10.2021
