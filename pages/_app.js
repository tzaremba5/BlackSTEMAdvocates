import 'tailwindcss/tailwind.css'
import { AuthContextProvider } from "../context/AuthContext";
import { ChatContextProvider } from "../context/ChatContext";

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <Component {...pageProps} />
      </ChatContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp
