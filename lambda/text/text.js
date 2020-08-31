const ptMessages = require('./pt_BR')

function getMessage(key) {
  return ptMessages[key];
}

module.exports = {
  getMessage,
}
