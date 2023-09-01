
import { Schema, Types, models, model, Document, PopulatedDoc } from 'mongoose'
// NOTE: Please read the mongoose typescript documents before updating. 
// Types is different than Schema.Types. Schema.Types is used for Schema defs
//  wheras Types is Typescript definitions

// TODO: Remove type defs once the AnkiLang library is imported

export interface UserType {
    _id?: Types.ObjectId,
    name: string,
    email: string,
    passHash: string
}

const userSchema = new Schema<UserType>({
    title: String,
    value: String,
    translations: [{ type: 'ObjectId' , ref: 'Translation'}],
    inlang: String,
    outlang: String,
})


export const DeckModel = models.Deck || model('Deck', deckSchema);
