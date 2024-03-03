import {css} from "styled-components"

const DarkTheme = css`
background-color: ${({theme}) => theme.colors.background.dark};
& * > h1 {
    color: ${({theme}) => theme.colors.text.light};
}
& * > h2 {
    color: ${({theme}) => theme.colors.text.dark};
}
& * > p {
    color: ${({theme}) => theme.colors.text.accent.dark};
}
`
const DarkAccentTheme = css`
background-color: ${({theme}) => theme.colors.background.accent.dark};
& * > h1 {
    color: ${({theme}) => theme.colors.text.accent.dark};
}
& * > h2 {
    color: ${({theme}) => theme.colors.text.accent.light};
}
& * > p {
    color: ${({theme}) => theme.colors.text.light};
}
`
const LightTheme = css`
background-color: ${({theme}) => theme.colors.background.light};
& * > h1 {
    color: ${({theme}) => theme.colors.text.accent.light};
}
& * > h2 {
    color: ${({theme}) => theme.colors.text.light};
}
& * > p {
    color: ${({theme}) => theme.colors.text.light};
}
`
const LightAccentTheme = css`
background-color: ${({theme}) => theme.colors.background.accent.light};
& * > h1 {
    color: ${({theme}) => theme.colors.text.dark};
}
& * > h2 {
    color: ${({theme}) => theme.colors.text.dark};
}
& * > p {
    color: ${({theme}) => theme.colors.text.dark};
}
`
export const ThemeSelector = css`
    ${({$theme}) => 
        $theme === "dark"
        ? DarkTheme
        : $theme === "dark-accent"
        ? DarkAccentTheme
        : $theme === "light-accent"
        ? LightAccentTheme
        : $theme === "light"
        ? LightTheme
        : null
    }; 
`