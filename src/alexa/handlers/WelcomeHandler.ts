import { HandlerInput, RequestHandler } from "ask-sdk"
import { Response } from "ask-sdk-model"
import { Log } from '../common/utils/Log'
import { Platforms } from '../common/assets/Platforms'
import { AlexaResponseComposer } from "../composers/AlexaResponseComposer";
import { IntentRouter } from "../../common/routers/IntentRouter";


export class WelcomeHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest'
    }

    handle(handlerInput: HandlerInput) : Response {
        const logger = new Log()
        Log.debug('welcome handler!')
        const responseComposer = new AlexaResponseComposer(handlerInput)
        const intentRouter = new IntentRouter<Response>(Platforms.ALEXA, responseComposer)
        return intentRouter.welcomeFlow()
    }
}