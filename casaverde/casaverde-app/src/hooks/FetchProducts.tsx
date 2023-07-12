"use client";

import { useEffect, useState } from "react";
import api from "@/services/api/api";
import IProducts from "@/interface/IProducts";

export default function FetchProducts() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
}
