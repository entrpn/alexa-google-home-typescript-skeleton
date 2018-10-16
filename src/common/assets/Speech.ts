import { Platforms } from './Platforms'

export class Speech {

    public static readonly WELCOME_MESSAGE = {
        [Platforms.ALEXA] : `Welcome to Alexa Skill`,
        [Platforms.GOOGLE_HOME] : `Welcome to Google Assistant Action`
    }

    public static readonly REPEAT_MESSAGE = {
        [Platforms.ALEXA] : `Alexa Repeat Message`,
        [Platforms.GOOGLE_HOME] : `Google Home Repeat Message`
    }

}