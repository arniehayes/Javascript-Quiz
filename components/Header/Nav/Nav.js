import style from "./nav.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

const Nav = ({ setMenu }) => {
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className={style.nav_container}>
      <div className={style.close_icon}>
        <IconButton onClick={() => closeMenu()}>
          <CloseIcon className={style.button_white} />
        </IconButton>
      </div>
      <div className={style.button_container}>
        <Stack direction="column" spacing={6} className={style.button_stack}>
          <Link href="/">
            <a onClick={() => closeMenu()}>
              <Button variant="text" className={style.button}>
                Home
              </Button>
            </a>
          </Link>
          <Link href="contact">
            <a onClick={() => closeMenu()}>
              <Button variant="text" className={style.button}>
                Contact
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a onClick={() => closeMenu()}>
              <Button variant="text" className={style.button}>
                Share
              </Button>
            </a>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default Nav;
