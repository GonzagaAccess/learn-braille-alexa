const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const AlphabetKTIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AlphabetKTIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('alphabetKT');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { AlphabetKTIntentHandler }
