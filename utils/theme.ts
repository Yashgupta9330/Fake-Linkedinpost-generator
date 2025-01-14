import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        // Replace 'YourFontName' with your font name.
        heading: "Inter",
        body: "Inter",
    },
    colors: {
        black: "#0f1419",
        blue: "#1D9bF0",
        lightBlue: "#69c3ff",
        lightGray: "#536471",
        tweethunter: {
            // https://colorkit.io/shades-tints
            0: "#ffffff",
            25: "#eAF4FA",
            50: "#EAF4FA",
            100: "#D2DEE3",
            150: "#B9C6CC",
            200: "#A0AEB5",
            250: "#87969E",
            300: "#6E7E87",
            350: "#556670",
            400: "#3C4E59",
            450: "#233642",
            500: "#144462",
            550: "#123D57",
            600: "#10364C",
            650: "#0E2F41",
            700: "#0C2836",
            750: "#0A212B",
            800: "#081A20",
            850: "#061315",
            900: "#040C0A",
            950: "#010101",
        },
        taplio: {
            0: "#F9F9FD",
            25: "#F3F3FB",
            50: "#ECEDF8",
            100: "#D5D9EE",
            150: "#C2C6E5",
            200: "#AFB3DC",
            250: "#9CA0D3",
            300: "#898DCA",
            350: "#767AC1",
            400: "#6367B8",
            450: "#5054AF",
            500: "#3D41A6",
            550: "#373793",
            600: "#313183",
            650: "#2B2B73",
            700: "#252563",
            750: "#1F1F53",
            800: "#191943",
            850: "#131333",
            900: "#0D0D23",
            950: "#070713",
        },
    }
})
