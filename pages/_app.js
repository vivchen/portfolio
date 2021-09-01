import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import "../public/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
