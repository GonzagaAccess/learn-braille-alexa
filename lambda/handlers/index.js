const { CreditsIntentHandler } = require('./creditsIntentHandler')
const { HelpIntentHandler } = require('./helpIntentHandler')
const { HistoryIntentHandler } = require('./historyIntentHandler')
const { LaunchRequestHandler } = require('./launchIntentHandler')
const { CancelAndStopIntentHandler } = require('./cancelStopIntentHandler')
const { FallbackIntentHandler } = require('./fallbackIntentHandler')

module.exports = {
  CreditsIntentHandler,
  HelpIntentHandler,
  HistoryIntentHandler,
  LaunchRequestHandler,
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
}
