const { getMessage } = require('../text/text');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const availableTasks = getMessage('availableTasks');
        const speakOutput = `${getMessage('welcome')}\n${availableTasks}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(availableTasks)
            .getResponse();
    }
};

module.exports = { LaunchRequestHandler }
