import { PropsWithChildren, createContext, useState } from "react";

type CotextType = [
    string,
    (colorTheme: string) => void
]

export const myContext = createContext <CotextType> (["", () => {}]);

export default function ThemeContext ({children}: PropsWithChildren<{}>) {
    
    const [colorTheme, setColorTheme] = useState ("light-theme")

    return (
        <myContext.Provider value={[colorTheme, setColorTheme]}>
            {children}
        </myContext.Provider>
    );
}