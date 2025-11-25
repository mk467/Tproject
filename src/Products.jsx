import axios from "axios";
import React, { useEffect, useState } from "react";

export const Products = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setcount] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:5000/test")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.length > 0) {
       axios.post("http://localhost:5000/add", {
            name,
            price,
            count,
          })
          .then(() => {
            getData();
            setName("");
            setPrice("");
            setcount("");
          });
      } else alert("Please enter a product name");
    } catch (err) {
      console.log(err);
    }
  };

  const HandleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/test/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
      >
        <table border="1px" width="50%" height="50%">
          <thead>
            <tr height="40px" style={{ backgroundColor: "grey" }}>
              <th>Product Name</th>
              <th>Price</th>
              <th>count</th>
            </tr>
          </thead>

          {items.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log(item.id);
                      HandleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div style={{ backgroundColor: "gray" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginLeft: "25%",
            paddingTop: "3%",
          }}
        >
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
            style={{ width: "250px" }}
            type="text"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            value={price}
            style={{ width: "250px" }}
            type="text"
          />
          <input
            onChange={(e) => setcount(e.target.value)}
            placeholder="count"
            value={count}
            style={{ width: "250px" }}
            type="text"
          />
        </div>
        <button
          onClick={(e) => {
            HandleSubmit(e);
          }}
          style={{
            width: "100px",
            height: "30px",
            marginLeft: "30%",
            marginTop: "3%",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
