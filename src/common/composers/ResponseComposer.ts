export interface ResponseComposer<T> {
    speak(prompt: string) : this
    reprompt(prompt: string) : this
    build() : T
}