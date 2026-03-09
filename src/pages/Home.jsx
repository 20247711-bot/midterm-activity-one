import ProductCard from "../components/ProductCard";
import {useState, useEffect} from "react";
import {getProducts} from "../services/api";

function Home() {
  return (
    <div className="container mt-4">
      <h2>Welcome to Student Dashboard</h2>
      <p>This app demonstrates React Router, useState, and useEffect.</p>
    </div>
  )
}

export default Home