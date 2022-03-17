import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Cooking blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#228c22',
                    borderRadius: '8px'
                }}>Add recipe</Link>
            </div>
        </nav>
      );
}
 
export default NavBar ;