import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Form from "./Component/Form";
import User from "./Component/User";
import { createContext, useReducer, useState } from "react";

export const ValueContex = createContext({ state: "" });
function App() {
  const initialValues = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "NEW":
        return [...state, action.payload];

      case "UPDATE":
        return [...state, action.payload];

      case "DELETE":
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === action.payload) {
            console.log("match");
          }
          console.log(state.indexOf(state[i]), "index");
        }
        // console.log(typeof state, "state from app");
        let temp = state.splice(state.indexOf(action.payload), 1);
        console.log(temp, "temp");
        return [...temp];
      default:
        return state;
    }
  };

  const [values, dispatch] = useReducer(reducer, initialValues);

  const [state, setstate] = useState([]);
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/User",
          element: (
            <>
              <ValueContex.Provider value={{ values, dispatch }}>
                <User />
              </ValueContex.Provider>
            </>
          ),
        },
        {
          path: "/Form",

          element: (
            <>
              <Form setstate={setstate} values={values} dispatch={dispatch} />
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routing} />;
}

export default App;
