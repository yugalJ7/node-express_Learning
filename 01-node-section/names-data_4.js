//local
const budget = "200mil";
// shareable

// this syntax through error because it is written in ES6 syntax which is not supported in nodejs
// export const kroos = "kroos";
// export const modric = "modric";
// export const lunen = "lunen";

// When we use both exports and module.exports mechanism in same file -> Node.js will prioritize module.exports.

// one way to export
// exports.kroos = "kroos";
// exports.modric = "modric";
// exports.lunen = "lunen";

// second way to export
const nacho = "nacho";
const brahim = "brahahim";
const ancelloti = "ancelloti";
const modric = "modric";

module.exports = { nacho, brahim, ancelloti, modric };
