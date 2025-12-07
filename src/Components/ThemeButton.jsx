import { useContext } from "react";
import ThemeContext from "./../context/Theme";
import { PiMoonBold } from "react-icons/pi";
import { PiSunBold } from "react-icons/pi";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="cursor-pointer" onClick={toggleTheme}>
      {theme === "dark" ? 
      < PiSunBold className='text-2xl lg:text-3xl hover:text-gray-700 dark:hover:text-white
      transition-transform duration-400 hover:scale-110'/>
      : 
      <PiMoonBold className='text-2xl lg:text-3xl hover:text-gray-700 dark:hover:text-white
      transition-transform duration-400 hover:scale-110'
      />}
    </button>
  );
};

export default ThemeButton;
