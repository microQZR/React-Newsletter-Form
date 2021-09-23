import { useState } from "react";

import classes from "./App.module.css";
import Button from "./components/Button";
import Newsletter from "./components/Newsletter";

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <main className={`flex-column ${classes.main}`}>
      <h1>YOUR COMPANY INC.</h1>
      <Button className={classes.btn} buttonStyle="outline" onClick={() => setShowNewsletter(true)}>
        Show Subscription Form
      </Button>
      {showNewsletter && <Newsletter closeHandler={() => setShowNewsletter(false)} />}
    </main>
  );
}

export default App;
