// Icons
import bmiIcon from "assets/icons/bmi.svg";
import waterIcon from "assets/icons/water.svg";
import caloriesIcon from "assets/icons/calories.svg";
import whrIcon from "assets/icons/whr.svg";

// Views
import BMI from "views/BMI";
import Water from "views/Water";
import Calories from "views/Calories";
import WHR from "views/WHR";
import Blog from "views/Blog";
import BlogPost from "views/BlogPost"; // Import BlogPost component

export const routes = [
  {
    name: 'Strona Główna',
    path: '/',
  },

 
  {
    name: 'Kalkulator kalorii',
    path: '/calories',
    component: <Calories />,
    icon: caloriesIcon,
  },
  

  {
    name: 'Kalkulator BMI',
    path: '/bmi',
    component: <BMI />,
    icon: bmiIcon,
  },
  {
    name: 'Zapotrzebowanie wody',
    path: '/water',
    component: <Water />,
    icon: waterIcon,
  },
  {
    name: 'Kalkulator kalorii',
    path: '/calories',
    component: <Calories />,
    icon: caloriesIcon,
  },
  
  {
    name: 'Blog',
    path: '/blog',
    component: <Blog />,
  },
  {
    path: '/blog/:postId',
    component: <BlogPost />,
  },
];

// Function to chunk routes into arrays of 5 items
export const chunkRoutes = (routes, size) => {
  return routes.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = []; // start a new chunk
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

// Export the chunked routes
export const chunkedRoutes = chunkRoutes(routes.filter(route => route.icon), 5);

