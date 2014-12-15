module.exports = noJS;

function noJS () {
  // Remove the 'no-js' class when JavaScript's enabled
  document.querySelector("html").classList.remove("no-js");
}
