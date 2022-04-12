import style from './header.module.scss'
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';
import Nav from "./Nav/Nav"
import Logo from './Logo/Logo';

const Header = () => {

    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(true);
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Logo />
                <div className={style.menu_icon}>
                    {/* () => function() makes it so it doesn't run infinitly*/}
                    <MenuIcon onClick={() => openMenu()} />
                    {menu && <Nav setMenu={setMenu}/>}
                </div>
            </div>
        </div>
    );
};

export default Header;
