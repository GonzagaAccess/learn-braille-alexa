const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetFifthLineIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetFifthLineIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetFifthLine');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetFifthLineIntentHandler }
