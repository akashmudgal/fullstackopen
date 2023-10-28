//Course Header component
const Header=(props)=> {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

//Course Part component
const Part=(props)=>{
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

//Course Content component
const Content=(props) => {
  return (
    <div>
        {
          props.parts.map((part)=>{
            return (<Part name={part.name} exercises={part.exercises}/>)
          })
        }
    </div>
  )
}


//Course Component
const Course=(props)=>{
  return (
    <>
      <Header course={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </>
  )
}
//Total Component
const Total=(props)=>{
  return (
    <div>
      <p>Number of exercises {props.parts.reduce((total,part)=>{
          return total+part.exercises;
      },0)}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App