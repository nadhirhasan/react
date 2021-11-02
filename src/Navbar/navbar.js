import classes from "./navbar.module.css"
import searchIcon from "./search_icon.png"

function Navbar () {

    return <header className = {classes.header}>
    <h1 className = {classes.logo}>Ceyello</h1>
    <div className={classes.wrap}>
    <div className={classes.search}>
       <input type="text" className={classes.searchTerm} placeholder="Search for products"/>
       <button type="submit" className={classes.searchButton}>
         <img src= {searchIcon} alt="icon" className = {classes.icon}/>
      </button>
    </div>
 </div>
 </header>
}


export default Navbar