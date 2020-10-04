const { CreditsIntentHandler } = require('./creditsIntentHandler')
const { HelpIntentHandler } = require('./helpIntentHandler')
const { HistoryIntentHandler } = require('./historyIntentHandler')
const { LaunchRequestHandler } = require('./launchIntentHandler')
const { CancelAndStopIntentHandler } = require('./cancelAndStopIntentHandler')
const { FallbackIntentHandler } = require('./fallbackIntentHandler')
const { IntroAlphabetIntentHandler } = require('./introAlphabetIntentHandler')
const { AlphabetFirstLineIntentHandler } = require('./alphabetFirstLineIntentHandler')
const { AlphabetKTIntentHandler } = require('./alphabetKTIntentHandler')
const { AlphabetThreeLineIntentHandler } = require('./alphabetThreeLineIntentHandler')

module.exports = {
  CreditsIntentHandler,
  HelpIntentHandler,
  HistoryIntentHandler,
  LaunchRequestHandler,
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
  IntroAlphabetIntentHandler,
  AlphabetFirstLineIntentHandler,
  AlphabetKTIntentHandler,
  AlphabetThreeLineIntentHandler,
}
