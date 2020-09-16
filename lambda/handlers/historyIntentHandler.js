const HistoryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HistoryIntent';
    },
    handle(handlerInput) {
        console.log('Received on HistoryIntentHandler');
        try {
          const speakOutput = getMessage('history');
          return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
        } catch (e) {
          console.log('Error on get speakOutput', e)
        }

    }
};

module.exports = { HistoryIntentHandler }
