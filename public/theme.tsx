import { extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins';
import "@fontsource/open-sans/400.css"

const Theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif;`,
    body: `'Open Sans', sans-serif;`,
  },
})

export default Theme