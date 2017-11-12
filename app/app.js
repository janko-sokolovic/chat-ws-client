
const AppConfig = {
    PROTOCOL: "ws:",
    HOST: "//localhost",
    PORT: "9000"
}

let app = (function ($) {

    let appObj = {};

    appObj.socket;
    appObj.user;

    function Message(name, msg) {
        this.user = name;
        this.text = msg;
    }

    function onSocketOpen() {
        console.log("Connection established.");
    }

    function onSocketError(error) {
        console.error("Error: ", error);
    }

    function onSocketMessage(response) {
        let message = JSON.parse(response.data);

        let right = message.user === appObj.user ? 'right' : ''

        let messageElem = ' <div class="message-wrapper"><span class="message  ' + right + '"><span class="user">' + message.user + '</span><br/>' + message.text + '</span></div>';

        let wrapperElem = $(".message-list-wrapper")
        wrapperElem.append(messageElem);
        wrapperElem.animate ({scrollTop: $(".message-list-wrapper").height()}, 200);

    }

    function openConnection   () {
        appObj.socket = new WebSocket(AppConfig.PROTOCOL + AppConfig.HOST + ":" + AppConfig.PORT);
        appObj.socket.onopen = onSocketOpen;
        appObj.socket.onerror = onSocketError;
        appObj.socket.onmessage = onSocketMessage;
    }

    appObj.sendMessage = function () {
        let text = $(".message-input").val();
        let msg = new Message(appObj.user, text);

        let dto = JSON.stringify(msg);

        appObj.socket.send(dto);

        $(".message-input").val("");
    }

    appObj.selectUserName = function () {
        let name = $(".choose-name-input").val();
        appObj.user = name;

        $(".overlay").fadeOut(200);

        openConnection(appObj.user);
    }

    return appObj;
})($);