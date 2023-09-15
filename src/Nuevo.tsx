//componente para mostrar una lista de usuarios
const USERS = [
  { name: 'Juan', age: 20 },
  { name: 'Pedro', age: 30 },
  { name: 'Luis', age: 40 },
  { name: 'Maria', age: 50 },
]

export const Nuevo = () => {
  return (
    <div>
      <h3>Nuevo</h3>
      <ul>
        {
          USERS.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age}
            </li>
          ))
        }
      </ul>
    </div>
  )
}