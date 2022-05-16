import { useState } from "react"

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    setUser(username)
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="input your namne"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login
