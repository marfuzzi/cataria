block('toolbar').content()(function() {
    return [
        {
            block: 'user',
            mix: { block: 'toolbar', elem: 'user' }
        },
        {
            block: 'alternative-translation'
        },
        {
            block: 'form',
            method: 'POST',
            action: '/addFile',
            content: [
                {
                    block: 'attach',
                    mods: { theme: 'islands',size: 'm' },
                    name: 'attach-logo',
                    button: 'Выберите файл'
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', type: 'submit' },
                    mix: { block: 'toolbar', elem: 'action' },
                  //  url: '/addFile',
                    text: 'Загрузить'
                }
            ]
        },
        {
            elem: 'buttons',
            content: [
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', 'toolbar-action': 'updateTM' },
                    mix: { block: 'toolbar', elem: 'action' },
                    type: 'submit',
                    text: 'Update TM'
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', 'toolbar-action': 'saveTm' },
                    mix: { block: 'toolbar', elem: 'action' },
                    type: 'submit',
                    text: 'Save TM'
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', 'toolbar-action': 'translate' },
                    mix: { block: 'toolbar', elem: 'action' },
                    type: 'submit',
                    text: 'Translate'
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', 'toolbar-action': 'sendPR' },
                    mix: { block: 'toolbar', elem: 'action' },
                    type: 'submit',
                    text: 'Send PR'
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', type: 'link' },
                    mix: { block: 'toolbar', elem: 'action' },
                    url: '/downloadTrans',
                    text: 'Download'
                }
            ]
        }
    ];
});
