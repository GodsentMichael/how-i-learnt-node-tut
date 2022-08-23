//The goal is to show that we can export different data-types.
// This style of exporting involves adding the properties of the
// "module.exports"
module.exports.items = ["item1", "item2"];
const person = {
    name: "bob",
};
// Exporting the singleperson object above.
module.exports.singlePerson = person;