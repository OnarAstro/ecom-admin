
import { Link } from 'react-router-dom'
import cartbag from "../../assets/cartbag.png"
import cartlist from "../../assets/cartlist.png"

import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"}>
        <button className="">
          <img src={cartbag} alt="" height={50} width={50} />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button className="">
          <img src={cartlist} alt="" height={50} width={50} />
          <span>Product List</span>
        </button>
      </Link>
    </div>
  )
}

export default Sidebar