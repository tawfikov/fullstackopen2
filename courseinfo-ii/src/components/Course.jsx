const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <p><strong>total of {total} exercises</strong></p>
  )
}

const Content = ({ course }) => (
  <div>
    {course.parts.map(part => <Part key={part.id} part={part} /> )}
  </div>
)


const Course = ({ courses }) => {
  
  return (
    <div>
      {courses.map(course => 
      <div key={course.id}>
        <Header course={course} />
        <Content course={course} />
        <Total parts={course.parts} />
      </div>
      )}
    </div>
  )
}

export default Course