const { registerPlugin } = require('@scullyio/scully');
function customCopyPlugin() {
    // Do something to your Scully site
    /** copy some extra files into my dist folder */
}
const validator = async () => [];
registerPlugin('beforeAll', 'copy in my custom files', customCopyPlugin);
//# sourceMappingURL=beforeAll.js.map