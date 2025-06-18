function Student(props){
return(
    <div>
        <h2>Students information</h2>
        <p>Students Name: {props.name}</p>
        <p>Class: {props.grade}</p>
    </div>
)
}
export default Student;