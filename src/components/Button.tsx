import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target, label, icon, classes }) => {
  return href ? (
    <a href={href} target={target} className={`btn btn-primary ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </a>
  ) : (
    <button className={`btn btn-primary ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

const ButtonOutline = ({ href, target, label, icon, classes }) => {
  return href ? (
    <a href={href} target={target} className={`btn btn-outline ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </a>
  ) : (
    <button className={`btn btn-outline ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
