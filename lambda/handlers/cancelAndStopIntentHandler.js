const Alexa = require('ask-sdk-core');
const { getMessage } = require('../text/text');

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
        || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speakOutput = getMessage('byeMessage');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { CancelAndStopIntentHandler }
