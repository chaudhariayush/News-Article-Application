import React from "react";
// Changed from "@base-ui/react" to your shadcn ui path
import { Button } from "@/components/ui/button"; 

const App = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button className="bg-red-500" variant="ghost">Click me</Button>
    </div>
  );
};

export default App;