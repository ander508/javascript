const grades = ['A', 'B', 'C']
const tester = document.getElementById('test')

const grade = grades.map(function (word){
    if(word === 'A'){
        score = 90
    }
    if(word === 'B'){
        score = 80
    }
    if(word === 'C'){
        score = 70
    }
    return score
})

console.log(grade)

const total = grade.reduce(function (sum, item){
    return sum + item
})

const gpa = total / grade.length
tester.innerHTML = gpa