const students = [
    {
    name:"tiago",
    firstNote: 7.5,
    secondNote: 8.5
    },
    {
    name: "Julia",
    firstNote: 6.5,
    secondNote: 8.5
    },
    {
    name: "Leticia",
    firstNote: 7.5,
    secondNote: 8.2
    },
    {
    name: "Caio",
    firstNote: 5,
    secondNote: 2,
    },
]
for(let student of students){
    let name = student.name
    console.log(student.name)
    average = ((student.firstNote + student.secondNote) / 2).toFixed(1)
    if(average >= 7){
        alert(`A média do(a) aluno(a) ${name} é ${average} \n Parabéns, ${name}! Você foi aprovado(a) no concurso!`)
    }
    else{
        alert(`A média do(a) aluno(a) ${name} é ${average} \n Não foi dessa vez, ${name}! Tente novamente!`)
    }
}