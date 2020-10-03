const { CreditsIntentHandler } = require('./creditsIntentHandler')
const { HelpIntentHandler } = require('./helpIntentHandler')
const { HistoryIntentHandler } = require('./historyIntentHandler')
const { LaunchRequestHandler } = require('./launchIntentHandler')
const { CancelAndStopIntentHandler } = require('./cancelAndStopIntentHandler')
const { FallbackIntentHandler } = require('./fallbackIntentHandler')
const { IntroAlphabetIntentHandler } = require('./introAlphabetIntentHandler')
const { AlphabetAJIntentHandler } = require('./alphabetAJIntentHandler')
const { AlphabetKTIntentHandler } = require('./alphabetKTIntentHandler')

module.exports = {
  CreditsIntentHandler,
  HelpIntentHandler,
  HistoryIntentHandler,
  LaunchRequestHandler,
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
  IntroAlphabetIntentHandler,
  AlphabetAJIntentHandler,
  AlphabetKTIntentHandler,
}
