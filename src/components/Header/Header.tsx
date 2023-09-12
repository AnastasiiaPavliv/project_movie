import { NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to={'page/:page'}>Movies</NavLink>
        </div>
    );
};

export {Header};