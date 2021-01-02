
var score1 = prompt("marks obtainted in one subject");
var score2 = prompt ("marks obtainted in subject two")
var score3 = prompt ("marks obtainted in subject three");
var score =Number (score1)+Number(score2)+Number(score3);
var tscore =Number (score1)+Number(score2)+Number(score3);
var ttscore=tscore/3
console.log ("Marksheet");
var tm =("total marks:300");
var mo =("Marks obtained:");
var grade=("Grade:");
var rem =("Remarks:");

if (ttscore > 80 && ttscore <= 100) {
   console.log(tm);
   console.log(mo+score);
   console.log(grade+"Grade A-one");
   console.log(rem+"Excellent");
}
else if (ttscore > 70 && ttscore <= 80) {
console.log(tm);
console.log(mo+score);
console.log(grade+"Grade A");
console.log(rem+"Good");
}
else if (ttscore > 60 && ttscore <= 70) {
console.log(tm);
console.log(mo+score);
console.log(grade+"Grade B");
console.log(rem+"You need to improve");
}
else
{
    console.log(tm);
    console.log(mo+score);
    console.log(grade+ "Fail");
    console.log(rem+"Sorry");
}