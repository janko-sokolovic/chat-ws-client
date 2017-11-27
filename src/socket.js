
const AppConfig = {
    PROTOCOL: "ws:",
    HOST: "//localhost",
    PORT: "9000"
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        const socket = new WebSocket(AppConfig.PROTOCOL + AppConfig.HOST + ":" + AppConfig.PORT);
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;