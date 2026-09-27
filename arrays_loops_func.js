marks=[78,89,99,67,98]

function calculate_Total(marks){
    let total=0;
    for (let i=0;i<marks.length;i++){
        total+=marks[i];
    }
    return total;
}
function calculate_Average(marks){
    let avg=0
    total=calculate_Total(marks);
    avg=total/marks.length;
    return avg;

}
const prompt=require("prompt-sync")();
marks1=[];
for (let i=0;i<5;i++){
    marks1[i]=Number(prompt(`"Enter marks for subject ${i+1}: "`));
}

console.log(`Total Marks: ${calculate_Total(marks1)}`);
console.log(`Average Marks: ${calculate_Average(marks1)}`);