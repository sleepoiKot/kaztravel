import { NominationsCollection } from '/api/nominations'
import { NominationsStylingCollection } from '/api/nominationsStyling'

export const insertDefaultUsers = (users) => {
  if(Meteor.users.find().count() !== 0)
    return

  users.forEach(user => {
    let tuser = Accounts.createUser(user)
    Roles.addUsersToRoles(tuser, ['cu', 'r', 'd'], 'all')
  });
}

export const insertDefaultNominations = (nominations) => {
  if(NominationsCollection.find().count() !== 0)
    return

  nominations.forEach(nomination => {
    let finalData = {
      ...nomination,
      createdAt: new Date()
    }
    NominationsCollection.insert(finalData)
  });
}

export const insertDefaultNominationsStyling = (styling) => {
  if(NominationsStylingCollection.find().count() === styling.length)
    return

  styling.forEach(style => {
    NominationsStylingCollection.insert(style)
  });
}
