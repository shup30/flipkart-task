// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Blank from "./layouts/Blank";
// import Data from "./data/Data";
// import { ToastContainer } from "react-toastify";
// import Ui from "./flipkart/frontend/Ui";

// const App = () => {
//   // const {productItems} = Data;

//   return (
//     <>
//       <ToastContainer/>
//       <Switch>
//       <Route path="/Ui">
//        <Blank productItems={productItems}/>
//       </Route>
//       </Switch>
//     </>
//   );
// };

// export default App;

import React from "react";
import Ui from "./flipkart/frontend/Ui";

const App = () => {
  return (
    <>
      <Ui />
    </>
  );
};
export default App;
