const { CreditsIntentHandler } = require('./creditsIntentHandler')
const { HelpIntentHandler } = require('./helpIntentHandler')
const { HistoryIntentHandler } = require('./historyIntentHandler')
const { LaunchRequestHandler } = require('./launchIntentHandler')
const { CancelAndStopIntentHandler } = require('./cancelAndStopIntentHandler')
const { FallbackIntentHandler } = require('./fallbackIntentHandler')
const { IntroAlphabetIntentHandler } = require('./introAlphabetIntentHandler')
const { AlphabetAJIntentHandler } = require('./alphabetAJIntentHandler')
const { AlphabetKTIntentHandler } = require('./alphabetKTIntentHandler')
const { Alphabet3LineIntentHandler } = require('./alphabet3LineIntentHandler')

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
  Alphabet3LineIntentHandler,
}
