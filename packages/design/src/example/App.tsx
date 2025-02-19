import { Button } from "@repo/design/components/ui/button";
import IcReact from "@repo/design/assets/react.svg?react";

function App() {
  return (
    <div className=" relative bg-privia-100 text-h6">
      Hello World
      <Button className="bg-privia-100 bg-blue-500">
        <IcReact /> Button
      </Button>
      <p className="absolute inset-0 backdrop-brightness-50 blurred-overlay ">
        Good
      </p>
    </div>
  );
}

export default App;
