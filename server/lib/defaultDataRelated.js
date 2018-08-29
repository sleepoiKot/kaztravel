import { ConfigurationsCollection } from '/api/configs'

export const insertDefaultUsers = (users) => {
  if(Meteor.users.find().count() !== 0)
    return

  users.forEach(user => {
    let tuser = Accounts.createUser(user)
    Roles.addUsersToRoles(tuser, ['cu', 'r', 'd'], 'all')
  });
}
