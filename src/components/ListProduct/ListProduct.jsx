import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";

import "./ListProduct.css";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://ecom-node-production.up.railway.app/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("https://ecom-node-production.up.railway.app/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product">
      <h4 className="list-product-title ">Product List</h4>
      <div className="container-table ">
        <table className="">
          <thead>
            <tr className="">
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Old Price</th>
              <th className="p-2">New Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allproducts.map((product, i) => (
              <tr key={i}>
                <td className=" sm:flexCenter">
                  <img src={product.image} alt="" height={43} width={43} />
                </td>
                <td>
                  <div className="name">{product.name}</div>
                </td>
                <td>${product.new_price}</td>
                <td>${product.old_price}</td>
                <td>{product.category}</td>
                <td>
                  <div className="delete">
                    <TbTrash className="a" onClick={() => remove_product(product.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
