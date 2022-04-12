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
            <span style={{ color: "red" }}>J</span>
            <span style={{ color: "blue" }}>a</span>
            <span style={{ color: "green" }}>v</span>
            <span style={{ color: "yellow" }}>a</span>
            <span style={{ color: "purple" }}>S</span>
            <span style={{ color: "red" }}>c</span>
            <span style={{ color: "green" }}>r</span>
            <span style={{ color: "blue" }}>i</span>
            <span style={{ color: "yellow" }}>p</span>
            <span style={{ color: "red" }}>t</span>
          </div>
          <div className={style.name2}>
            <span style={{ color: "white" }}>Q</span>
            <span style={{ color: "white" }}>u</span>
            <span style={{ color: "white" }}>i</span>
            <span style={{ color: "white" }}>z</span>
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
