const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const IntroAlphabetIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'IntroAlphabetIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('introAlphabet');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { IntroAlphabetIntentHandler }
