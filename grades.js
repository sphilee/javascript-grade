let getGrade = (grade) => {
    switch (grade) {
        case "A+":
            return 4.5;
            break;
        case "A":
            return 4;
            break;
        case "B+":
            return 3.5;
            break;
        case "B":
            return 3;
            break;
        case "C+":
            return 2.5;
            break;
        case "C":
            return 2;
            break;
        case "D+":
            return 1.5;
            break;
        case "D":
            return 1;
            break;
        case "F":
            return 0;
            break;
        default:
            break;
    }
};
const data = [{
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 3
    },
    {
        'name': '교양영어',
        'grade': 'B+',
        'credit': 1
    },
    {
        'name': '철학',
        'grade': 'A',
        'credit': 2
    }
];
let results = data.reduce((a, b) => ({
    credit: a.credit + b.credit
}));
let totalRating = 0;
data.forEach((out) => {
    totalRating += getGrade(out.grade) * (out.credit / results.credit);
});
console.log("총 평점 " + totalRating.toFixed(2) + ", 이수학점 " + results.credit);