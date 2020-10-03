const { CreditsIntentHandler } = require('./creditsIntentHandler')
const { HelpIntentHandler } = require('./helpIntentHandler')
const { HistoryIntentHandler } = require('./historyIntentHandler')
const { LaunchRequestHandler } = require('./launchIntentHandler')
const { CancelAndStopIntentHandler } = require('./cancelAndStopIntentHandler')
const { FallbackIntentHandler } = require('./fallbackIntentHandler')
const { AlphabetAJIntentHandler } = require('./alphabetAJIntentHandler')
const { IntroAlphabetIntentHandler } = require('./introAlphabetIntentHandler')

module.exports = {
  CreditsIntentHandler,
  HelpIntentHandler,
  HistoryIntentHandler,
  LaunchRequestHandler,
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
  IntroAlphabetIntentHandler,
  AlphabetAJIntentHandler,
}
