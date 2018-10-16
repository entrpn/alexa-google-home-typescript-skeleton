import { ResponseComposer } from '../common/composers/ResponseComposer'
import { HandlerInput, ResponseBuilder } from 'ask-sdk'
import { Response } from 'ask-sdk-model'

export class AlexaResponseComposer implements ResponseComposer<Response> {

    private responseBuilder: ResponseBuilder

    constructor(handlerInput: HandlerInput) {
        this.responseBuilder = handlerInput.responseBuilder
    }

    speak(prompt: string) : this {
        this.responseBuilder.speak(prompt)
        return this
    }    
    
    reprompt(prompt: string) : this {
        this.responseBuilder.reprompt(prompt)
        return this
    }
    build(): Response {
        return this.responseBuilder.getResponse()
    }
}