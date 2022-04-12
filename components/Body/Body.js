import style from "./body.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from 'next/link'

const Body = () => {
    return (
      <div className={style.container}>
        {/* TITLE */}
        <div className={style.title_container}>
          <div className={style.name}>
            <p>JavaScript</p>
            <p>Quiz</p>
          </div>
        </div>

        {/* BODY */}
        <div className={style.button_container}>
          <Stack direction="column" spacing={2} className={style.button_stack}>
            <Link href="/Quiz">
              <a>
                <Button variant="contained" className={style.button}>
                  JavaScript
                </Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button variant="contained" className={style.button}>
                  React
                </Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button variant="contained" className={style.button}>
                  Random
                </Button>
              </a>
            </Link>
          </Stack>
        </div>
      </div>
    );
}

export default Body
