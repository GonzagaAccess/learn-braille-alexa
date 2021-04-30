const { CreditsIntentHandler } = require('./creditsIntentHandler')
const { HelpIntentHandler } = require('./helpIntentHandler')
const { HistoryIntentHandler } = require('./historyIntentHandler')
const { LaunchRequestHandler } = require('./launchIntentHandler')
const { CancelAndStopIntentHandler } = require('./cancelAndStopIntentHandler')
const { FallbackIntentHandler } = require('./fallbackIntentHandler')
const { IntroAlphabetIntentHandler } = require('./introAlphabetIntentHandler')
const { AlphabetFirstLineIntentHandler } = require('./alphabetFirstLineIntentHandler')
const { AlphabetSecondLineIntentHandler } = require('./alphabetSecondLineIntentHandler')
const { AlphabetThreeLineIntentHandler } = require('./alphabetThreeLineIntentHandler')
const { AlphabetFourthLineIntentHandler } = require('./alphabetFourthLineIntentHandler')
const { AlphabetFifthLineIntentHandler } = require('./alphabetFifthLineIntentHandler')
const { AlphabetNumberIntentHandler } = require('./alphabetNumberIntentHandler')
const { BrailleEightIntentHandler } = require('./brailleEightIntentHandler')

module.exports = {
  CreditsIntentHandler,
  HelpIntentHandler,
  HistoryIntentHandler,
  LaunchRequestHandler,
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
  IntroAlphabetIntentHandler,
  AlphabetFirstLineIntentHandler,
  AlphabetSecondLineIntentHandler,
  AlphabetThreeLineIntentHandler,
  AlphabetFourthLineIntentHandler,
  AlphabetFifthLineIntentHandler,
  AlphabetNumberIntentHandler,
  BrailleEightIntentHandler,
}
