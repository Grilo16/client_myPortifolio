const colors = {
    black: "#000000",
    white: "#FFFFFF",

    jet: "#30323D",
    saffron: "#E8C547",
    davieGray: "#4D5061",
    glaucousBlue: "#5C80BC",
    columbiaBlue: "#CEE5F2",
    platinum: "#E0E0E0",
    ashGrey: "#CDD1C4",
    coral: "#FC814A",
    ghostWhite: "#FBFBFF",
    uranianBlue: "#A5D8FF",
}

export const Theme = {

    colors: {
        background: {
            light : colors.ghostWhite,
            dark : colors.jet,
            accent: {
                light: colors.uranianBlue,
                dark: colors.davieGray,
            },
        },
        
        text: {
            light: colors.platinum, 
            dark: colors.jet,
            accent: {
                light: colors.coral,
                dark: colors.davieGray,
            }
        },
        ...colors,
    },
}