const Header = ({ user, setUser }) => {
  return (
    <div>
      welcome user {user}！<button onClick={() => setUser("")}>LogOut</button>
    </div>
  )
}
export default Header
