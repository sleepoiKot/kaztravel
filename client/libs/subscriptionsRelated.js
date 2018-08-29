export const multipleSubscribe = strArray => {
  let handle = []
  strArray.forEach(item => {
    const sub = Meteor.subscribe(item);
    handle.push(sub)
  });

  return handle
}
