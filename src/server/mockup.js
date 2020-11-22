import { Server } from "miragejs";
import image1 from "./assets/Images/image4.jpg";
import image2 from "./assets/Images/image5.jpg";
import image3 from "./assets/Images/image6.jpg";
import image4 from "./assets/Images/image7.jpg";
import image5 from "./assets/Images/image8.jpg";
import image6 from "./assets/Images/image3.jpg";
export function makeServer() {
  let server = new Server({
    routes() {
      // this.namespace = 'api';
      this.get("/api/shoes", () => [
        {
          id: 1,
          name: "Buffalo - Striploin",
          price: 39.11,
          photo: image1,
          quantity: 1,
        },
        {
          id: 2,
          name: "Bacardi Breezer - Tropical",
          price: 257.92,
          photo: image2,
          quantity: 1,
        },
        {
          id: 3,
          name: "Wine - Gato Negro Cabernet",
          price: 51.01,
          photo: image3,
          quantity: 1,
        },
        {
          id: 4,
          name: "Cabbage - Nappa",
          price: 250.9,
          photo: image4,
          quantity: 1,
        },
        {
          id: 5,
          name: "Sping Loaded Cup Dispenser",
          price: 175.85,
          photo: image5,
          quantity: 1,
        },
        {
          id: 6,
          name: "Bread - Malt Dispenser",
          price: 82.61,
          photo: image6,
          quantity: 1,
        },
      ]);
    },
  });
  return server;
}
