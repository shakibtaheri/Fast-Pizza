import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm cursor-pointer bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";
  const styles = {
    round: base + " rounded-full px-2.5 py-1 md:px-5 md:py-2.5 text-sm ",
    primary: base + " px-4 py-3 md:px-6 md:py-4 rounded-xl ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs rounded-xl",
    secondary:
      "inline-block text-sm cursor-pointer rounded-lg border-2 border-stone-300 font-semibold tracking-wide text-stone-300 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800  focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
