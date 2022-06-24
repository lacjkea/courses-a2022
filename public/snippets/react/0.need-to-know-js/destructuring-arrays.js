const names = ["Jonas", "Dannie", "Peter"];

//pick out two names
const [boss, sidekick] = names;
//boss === "Jonas"
//sidekick === "Dannie"

//pick out 1 & 3
const [boss, , henchman] = names;
//boss === "Jonas"
//henchman === "Peter"

//pick out Jonas, and put the rest in an array
const [boss, ...theOthers] = names;
//boss === "Jonas"
//theOthers === ["Dannie", "Peter"];
