import Student from "./Student"

export default function Students(){
    const students = ['Pavel','Walid','Zunaid']
    return (
        <div>
            {
                students.map(student => <Student name={student}></Student>)
            }
        </div>
    )
}