const { getMessage } = require('../text/text');
const Alexa = require('ask-sdk-core');

const BirthdayIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'BirthdayIntent';
  },
  handle(handlerInput) {
    const speakOutput = getMessage('birthday');

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

module.exports = { BirthdayIntentHandler }
