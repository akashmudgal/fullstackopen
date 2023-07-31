const course = 'Half Stack application development'
const Parts=[
  {
    "name": 'Fundamentals of React',
    "exercises": 10
  },
  {
    "name": 'Using props to pass data',
    "exercises": 7
  },
  {
    "name": 'State of a component',
    "exercises": 14
  }
]
//header component
const Header=(props)=> {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part=(props)=>{
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

//Content component
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
  return (
    <div>
      <Header course={course}/>
      <Content parts={Parts}/>
      <Total parts={Parts}/>
    </div>
  )
}

export default App