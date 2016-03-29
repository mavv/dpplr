

const message = (from) => `some message from ${from}.`;
const log =  () => {
  console.log('bla bla bla\n');
  console.log(message('outer space'));
  console.log('aaaaaaa');
};
export default log();
//
//
// "scripts": {
//     "start": "npm run watch-sass & npm run server",
//     "postinstall": "npm run build-sass; grunt default",
//     "test": "karma start karma.conf.js",
//     "server": "live-server",
//     "autoprefixer": "postcss -u autoprefixer -r  assets/styles/main.css",
//     "build-sass": "node-sass -o assets/styles/ src/sass/main.scss",
//     "watch-sass": "nodemon -e scss -x \"npm run build-sass && npm run autoprefixer\""
//   },
