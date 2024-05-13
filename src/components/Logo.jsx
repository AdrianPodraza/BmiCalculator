/* eslint-disable react/prop-types */
import LogoImg from "./../assets/images/logo.svg";

function Logo({ classes }) {
  return (
    <div className={classes}>
      <img src={LogoImg} />
    </div>
  );
}

export default Logo;
