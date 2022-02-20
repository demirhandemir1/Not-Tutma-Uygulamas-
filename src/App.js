import Header from "./components/header";
import Card from "./components/card";

import { VisibleProvider } from "./context/VisibleContext";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <VisibleProvider>
        <Header />
        <Card />
      </VisibleProvider>
    </div>
  );
}

export default App;
