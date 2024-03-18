import productApi from "../../api/productApi";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function ExampleCards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      <div className="cardExample-container">
      {products.map((product) => (
        <Card key={product.id} variant="outlined" className="cardExample-items">
          <CardContent>  
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {product.productName}
            </Typography>
            <img src={product.img} alt={product.productName} />
            <Typography variant="body2">
              Description: {product.moreInfo}
            </Typography>
            <Typography variant="body2">Price: {product.price}</Typography>
          </CardContent>
          <CardActions>
            <Button size="large">Learn More</Button>
          </CardActions>
        </Card>
      ))}

      </div>
    </Box>
  );
}
