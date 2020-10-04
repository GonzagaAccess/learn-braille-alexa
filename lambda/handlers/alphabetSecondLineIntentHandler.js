const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetSecondLineIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetSecondLineIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetSecondLine');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetSecondLineIntentHandler }
