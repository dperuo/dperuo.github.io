module.exports = noJS;

function noJS () {
  document.querySelector("html").classList.remove("no-js");
}
