import { ResponseComposer } from '../composers/ResponseComposer'
import { SpeechComposer } from '../composers/SpeechComposer'
import { Platforms } from '../assets/Platforms'

export class IntentRouter<T> {

    private responseComposer: ResponseComposer<T>
    private speechComposer: SpeechComposer

    constructor(platform: Platforms, responseComposer: ResponseComposer<T>) {
        this.responseComposer = responseComposer
        this.speechComposer = new SpeechComposer(platform)
    }

    welcomeFlow() : T {
        this.responseComposer.speak(this.speechComposer.getWelcomeMessage())
        this.responseComposer.reprompt(this.speechComposer.getRepeatMessage())
        return this.responseComposer.build()
    }
}