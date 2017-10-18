"use strict";

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function setGrade() {
    rl.question('과목을 JSON형태로 입력하세요<종료는 end입력> : ', function (answer) {
        if (answer === "end") {
            setTimeout(function () {
                printScore(data);
            }, 2000);
            rl.close(answer);
        } else {
            data.push(JSON.parse(answer));
            setGrade();
        }
    });
};

var data = [{
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'bMajor': true
}, {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 1,
    'bMajor': false
}, {
    'name': '철학',
    'grade': 'A',
    'credit': 2,
    'bMajor': false
}];

function printScore(data) {
    var totalRating = 0;
    var majorRating = 0;
    var totalCredit = data.map(function (item) {
        return item.credit;
    }).reduce(function (prev, curr) {
        return prev + curr;
    });
    var bMajorCredit = data.filter(function (out) {
        return out.bMajor;
    }).map(function (item) {
        return item.credit;
    }).reduce(function (prev, curr) {
        return prev + curr;
    });
    data.forEach(function (out) {
        totalRating += getGrade(out.grade) * (out.credit / totalCredit);
        majorRating += out.bMajor ? getGrade(out.grade) * (out.credit / bMajorCredit) : 0;
    });
    console.log("총 평점 : " + totalRating.toFixed(2) + ", 전공평점 : " + majorRating.toFixed(2) + ", 이수학점 : " + totalCredit + ", 전공이수학점 : " + bMajorCredit);
    console.log("4.0학점으로 변환하는 경우 총평점은 " + (totalRating * (4 / 4.5)).toFixed(2) + "은 입니다.");
};

function getGrade(grade) {
    var gradeMap = {
        A: 4,
        B: 3,
        C: 2,
        D: 1,
        F: 0
    };
    var gradeScore = grade.length > 1 ? gradeMap[grade[0]] + parseFloat(grade[1] + "0.5") : gradeMap[grade];

    return gradeScore;
}

setGrade();