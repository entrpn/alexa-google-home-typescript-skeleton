import { Speech } from '../assets/Speech'
import { Platforms } from '../assets/Platforms'

export class SpeechComposer {

    private platform: Platforms

    constructor(platform: Platforms) {
        this.platform = platform
    }

    getWelcomeMessage() {
        return Speech.WELCOME_MESSAGE[this.platform]
    }

    getRepeatMessage() {
        return Speech.REPEAT_MESSAGE[this.platform]
    }

}