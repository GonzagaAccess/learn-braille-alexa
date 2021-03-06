const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const HistoryIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HistoryIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('history');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { HistoryIntentHandler }
