import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Menubar = () => {

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 text-white">
      <div className="text-xl font-bold mr-8">Keyboard World</div>

      <div className="flex items-center gap-4">
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500" : "text-white"
                  }
                >
                  Products
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500" : "text-white"
                  }
                >
                  About Us
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500" : "text-white"
                  }
                >
                  Contact Us
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500" : "text-white"
                  }
                >
                  Dashboard
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <FaShoppingCart className="text-2xl mr-2" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
