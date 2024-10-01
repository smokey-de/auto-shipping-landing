import logo from "../../../../shared/assets/logo.png";

import classes from "./index.module.scss";
export const Navbar = () => {
  return (
    <div className="flex items-center gap-3 pt-4 pb-4">
      <div className={classes.navbarLogo}>
        <img src={logo as string} alt="" />
      </div>
      <div>
        <h3 className={classes.logoTitle}>UNIQUE AUTO SHIPPING</h3>
      </div>
    </div>
  );
};
