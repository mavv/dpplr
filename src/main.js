

const message = (from) => `some message from ${from}.`;
const log =  () => {
  console.log('bla bla bla\n');
  console.log(message('outer space'));
};
export default log();
