// Student information
const firstName = "Mohammed";
const lastName = "Ali";
const subject1 = 65;
const subject2 = 72;
const subject3 = 58;

// Total score
const totalScore = subject1 + subject2 + subject3;

// Remark
let remark;

if (totalScore >= 70) {
  remark = "Excellent";
} else if (totalScore >= 50 && totalScore < 70) {
  remark = "Good";
} else if (totalScore >= 35 && totalScore < 50) {
  remark = "You can do better";
} else {
  remark = "Fail";
}

// Display results
console.log("===== EXAMINATION RESULT =====");
console.log("Full Name: " + firstName + " " + lastName);
console.log("Subject 1: " + subject1);
console.log("Subject 2: " + subject2);
console.log("Subject 3: " + subject3);
console.log("Total Score: " + totalScore);
console.log("Remark: " + remark);
