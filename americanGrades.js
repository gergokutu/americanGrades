function toAmericanGrade(grade) {
    // hint: you can use if ( *conditional* ) return 'A'; etc.
    if (grade <= 10 && grade >= 9) {
        return 'A'
    } else if (grade <= 9 && grade >= 8) {
        return 'B'
    } else if (grade <= 8 && grade >= 7) {
        return 'C'
    } else if (grade <= 7 && grade >= 6) {
        return 'D'
    } else if (grade <= 6 && grade >= 1) {
        return 'F'
    } else {
        return 'Not existing grade'
    }
}

function toAmericanGrades(grades) {
    return grades.map(toAmericanGrade) // replace this with your answer
}

function averageAmericanGrade(grades) {
    return toAmericanGrade(grades.reduce((sum, value) => sum + value, 0) / grades.length)
}

// test

function test (num, should_become) {
    if (toAmericanGrade(num) === should_become) {
      console.log("test passed")
    } else {
      console.log(`toAmericanGrade(${num}) should have been ${should_become} but was ${toAmericanGrade(num)}`)
    }
  }
  test(9, "A")
  test(8.3, "B")
  test(1, "F")
  test(5.9, "F")
  test(7, "C")
  test(6.9, "D")
  test(0.9, "Not existing grade")
  test(11, "Not existing grade")

const grades1 = [9, 5.5, 6, 7.3]
const res = toAmericanGrades(grades1)[3]
console.log(`last is C? ${'C' == res ? "yes" : `no: ${res}`}`)
const res2 = averageAmericanGrade(grades1)
console.log(`average is D? ${'D' == res2 ? "yes" : `no: ${res}`}`)
