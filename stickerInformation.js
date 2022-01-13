module.exports = async function ({ config, hooks }) {
    function log(message) {
        console.log(`[Sticker Information] ${message}`);
    }

    const afterNewMessageReceived = ({ opts, message }) => {
        const { thread } = opts;
        const stickers = message.stickerItems;

        if (stickers && stickers.length > 0) {
            console.log(stickers);
        }
    };

    hooks.afterNewMessageReceived(afterNewMessageReceived);

    log(`Sticker Information plugin engaged.`);
};
