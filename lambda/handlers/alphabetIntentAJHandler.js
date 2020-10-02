const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetAJIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetAJIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetAJ');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetAJIntentHandler }
