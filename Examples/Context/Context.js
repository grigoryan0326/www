// context papka enq sarqum mejy mer context filey
import { createContext } from "react"

const UserContext = createContext({
  user: "Karen",
  setUser: () => {}, // partadir chi bayc lava
})

// xosqi appy dnum enq UserContexti mej, vor appi sax componentnerin UserContexty provide ani
function App() {
  const [user, setUser] = useState("Karen")

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='App'>
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  )
}

// orinak User componenti mej arden karanq UserContexti usery stananq
// ex 1
import UserContext from "context/"

function User() {
  return (
    <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  ) // es metody kochvuma props render, erb vor componenti childreni mej function-ov props enq render anum
}

// ex 2
import useContext from "react"
import UserContext from "context/"

function User() {
  const user = useContext(UserContext)
  return
  ;<div>{user}</div>
}
