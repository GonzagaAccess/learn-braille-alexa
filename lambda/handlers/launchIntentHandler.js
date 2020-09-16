const { getMessage } = require('../text/text');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    try {

      const availableTasks = getMessage('availableTasks');
      const speakOutput = `${getMessage('welcome')}\n${availableTasks}`;

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(availableTasks)
        .getResponse();
    } catch (e) {
      console.log('Error on ', e)
    }
  }
};

module.exports = { LaunchRequestHandler }
