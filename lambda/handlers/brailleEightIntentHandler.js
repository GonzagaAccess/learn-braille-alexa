const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const BrailleEightIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'BrailleEightIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('braille8');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { BrailleEightIntentHandler }
