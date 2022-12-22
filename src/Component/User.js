/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import { ValueContex } from "../App";
function User() {
  // debugger;
  const{values , dispatch} = useContext(ValueContex);
  console.log(values, "values");
  let navigate = useNavigate();
  let dlt = (id) => {
    // let temp = state.filter((e) => e.id !== id);
    dispatch({ type: "DELETE" , action:id});
    // setstate(temp);
  };

  let update = (val) => {
    // setEditState(val);
    // redirect("/Form");
    navigate("/Form");
  };

  // useEffect(() => {
  //   let rd = [];
  //   for (let i = 0; i < state.length; i++) {
  //     if (state[i].id === updateState.id) {
  //       state[i] = updateState;
  //       rd.push(state[i]);
  //       setstate(state);
  //     } else {
  //       rd.push(state[i]);
  //     }
  //   }
  //   setstate(rd);

  //   setEditState("");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [updateState]);

  return (
    <>
      {
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {values &&
              values.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>
                      <button onClick={() => update(e)}>Update</button>
                      <button onClick={() => dlt(e)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      }
    </>
  );
}

export default User;
