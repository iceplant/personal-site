import NavBar from "./nav-bar";

const DanceWebsite = (props) => {
  return (<div>
    <NavBar setPage={props.setPage}/> 
    <div>Info about Dance</div>
    </div>)
};


export default DanceWebsite;