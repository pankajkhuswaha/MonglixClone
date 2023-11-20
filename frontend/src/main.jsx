import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./essentail/ScrollToTop.jsx";
import { store } from "./app/store.js";
import "./index.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </>
);
