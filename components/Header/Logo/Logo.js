import style from "./logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
      <div className={style.logo}>
        {/* href='/' is to route to the home page */}
        <Link href='/'>
            <a>
                <img src="/rubik.png" alt="logo" className={style.img} />
            </a>
        </Link>
    </div>
  );
};

export default Logo;
