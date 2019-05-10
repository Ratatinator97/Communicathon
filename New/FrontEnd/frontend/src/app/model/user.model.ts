export interface User {
    nom: String,
    prenom:String,
    email:String,
    hash:String,
    salt:String,
    cardID: {
         address: String,
         personnal: {
           phone: String
         },
         contact1: {
              name: String,
              email: String,
              phone: Number
         },
         contact2: {
             name: String,
             email: String,
             phone: Number
        },
         medical_Data: String,
         talk_Ability: Boolean,
         understand_Ability: Boolean,
         known_Languages: String,
         updated_at: Date,
      }
 }
