import { SkillBuilders } from "ask-sdk"
import { LambdaHandler } from 'ask-sdk-core/dist/skill/factory/BaseSkillFactory'

function buildLambdaSkill() : LambdaHandler {
    return SkillBuilders.standard()
    .addRequestHandlers(
        // new WelcomeHandler(),
        // new ExitHandler(),
        // new FallbackHandler(),
        // new HelpHandler()
    )
    //.addErrorHandlers(new CustomErrorHandler())
    .lambda();
}

export let handler = buildLambdaSkill()