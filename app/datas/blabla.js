const savedDate = matchs[0].date

// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
var parts =savedDate.split('/');
var mydate = new Date(parts[2], parts[1] - 1, parts[0]).toLocaleDateString(); 
console.log(mydate);

const maintenant = new Date().toLocaleDateString()
console.log(maintenant);

if (mydate > maintenant) {
    console.log("dans le futur");
} else {
    console.log("dans le passé");
}