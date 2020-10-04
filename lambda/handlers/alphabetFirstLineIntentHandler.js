const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetFirstLineIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetFirstLineIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetFirstLine');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetFirstLineIntentHandler }
