import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react' 
import Theme from '../public/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps}/>
    </ChakraProvider>
  );
};

export default App;