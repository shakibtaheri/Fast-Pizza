import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  //come from LoaderMenu
  const pizzaMenu = useLoaderData();

  return (
    <ul>
      {pizzaMenu.map((pizza) => (
        <MenuItem pizzaData={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
// Convention
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
