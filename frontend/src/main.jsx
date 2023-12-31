import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./essentail/ScrollToTop.jsx";
import { store } from "./app/store.js";
import "./index.css";
import  {  Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loader from "./components/productslider/loader/Loader.jsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <ScrollToTop />
          <Suspense fallback={Loader}>
            <App />
          </Suspense>
        </Router>
      </QueryClientProvider>
    </Provider>
  </>
);
