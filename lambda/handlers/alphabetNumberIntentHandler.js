const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetNumberIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetNumberIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetNumber');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetNumberIntentHandler }
