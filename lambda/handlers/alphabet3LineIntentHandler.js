const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const Alphabet3LineIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Alphabet3LineIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabet3Line');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { Alphabet3LineIntentHandler }
