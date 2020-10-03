const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetThreeLineIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetThreeLineIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetThreeLine');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetThreeLineIntentHandler }
