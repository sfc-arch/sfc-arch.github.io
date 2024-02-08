// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({
    config,
    fonts: {
        heading: `'BIZ UDPGothic', sans-serif`,
        body: `'BIZ UDPGothic', sans-serif`,
        mono: `'IBM Plex Mono', monospace`,
    },
    styles: {
        global: (props: { colorMode: string }) => ({
            body: {
                background: props.colorMode === "dark" ? "#101010" : "white",
            },
            // a: {
            //     color: props.colorMode === "dark" ? "teal.300" : "teal.500",
            // },
        }),
    },
})

export default theme
