import '@/styles/globals.css'
import { Layout } from '@/components/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { useSelector } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    // Wrapping the app with the Redux Provider to provide the store to all components
    <Provider store={store}>
      <Layout>
        {/* Wrapping the app content with the ErrorBoundary component */}
        <ErrorBoundary>
          {/* Rendering the app content */}
          <AppContent Component={Component} pageProps={pageProps} />
        </ErrorBoundary>
      </Layout>
    </Provider>
  );
}

function AppContent({ Component, pageProps }) {
  // Accessing the 'mode' state from the Redux store using the useSelector hook
  const mode = useSelector((state) => state.mode.mode);

  return (
    <>
      {/* Rendering the component passed as a prop with its pageProps */}
      <Component {...pageProps} />
      {/* Conditionally applying inline styles based on the 'mode' value */}
      {mode === 'dark' && (
        <style jsx>{`
          :root {
            --foreground-rgb: 0, 0, 0;
            --background-start-rgb: 214, 219, 220;
            --background-end-rgb: 255, 255, 255;
          }
        
          @media (prefers-color-scheme: dark) {
            :root {
              --foreground-rgb: 255, 255, 255;
              --background-start-rgb: 0, 0, 0;
              --background-end-rgb: 0, 0, 0;
            }
          }
        
          body {
            color: rgb(var(--foreground-rgb));
            background: linear-gradient(
              to bottom,
              transparent,
              rgb(var(--background-end-rgb))
            )
            rgb(var(--background-start-rgb));
          }
        `}</style>
      )}
    </>
  );
}
