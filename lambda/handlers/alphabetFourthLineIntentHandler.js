const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetFourthLineIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetFourthLineIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetFourthLine');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetFourthLineIntentHandler }
