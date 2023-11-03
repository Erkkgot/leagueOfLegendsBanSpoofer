/* <div class="message">
<span class="nick">erikgot:</span>
<span class="messageContent"> oi</span>
</div> */

let nickInput = document.getElementById('nick')
let msgInput = document.getElementById('messageInput')
let createMessageBtn = document.getElementById('createMessage')
let chatlogsDiv = document.getElementById('chatlogs')

function createMessage() {
    let nick = nickInput.value
    let message = msgInput.value
    if (nick == ' ' || message == ' ') {
        return true
    }
    
    let nickSpan = document.createElement('span')
    let messageSpan = document.createElement('span')
    let messageDiv = document.createElement('div')

    nickSpan.className = 'nick'
    messageSpan.className = 'messageContent'
    messageDiv.className = 'message'

    nickSpan.textContent = nick + ": "
    messageSpan.textContent = message

    messageDiv.appendChild(nickSpan)
    messageDiv.appendChild(messageSpan)
    chatlogsDiv.appendChild(messageDiv)
}

createMessageBtn.addEventListener('click', createMessage)