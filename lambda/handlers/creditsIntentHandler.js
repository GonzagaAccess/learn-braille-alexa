const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const CreditsIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CreditsIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('credits');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { CreditsIntentHandler }
