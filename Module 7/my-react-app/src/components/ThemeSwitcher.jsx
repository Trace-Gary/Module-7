import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeProvider";

function ThemeSwitcher() {
    const { theme, setTheme } = useContext(MyThemeContext);

    return (
        <button
            onClick={() =>
                setTheme(theme === themes.light ? themes.dark : themes.light)
            }
        >
            Toggle Theme
        </button>
    );
}

export default ThemeSwitcher;
