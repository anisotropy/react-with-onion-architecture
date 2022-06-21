import { Cart, addItem, calcTotal } from "library/interface/cart";
import { withLogging, wrapLogging } from "./layer1";

let shoppingCart: Cart = {};

// function update_shipping_icons(cart) {
//   var buttons = get_buy_buttons_dom();
//   for(var i = 0; i < buttons.length; i++) {
//     var button = buttons[i];
//     var item = button.item;
//     var new_cart = add_item(cart, item);
//     if(gets_free_shipping(new_cart))
//       button.show_free_shipping_icon();
//     else
//       button.hide_free_shipping_icon();
//   }
// }

export function addItemToCart(
  name: string,
  price: number,
  quantity: number,
  shipping: number
) {
  shoppingCart = addItem(shoppingCart, name, price, quantity, shipping);
  const total = calcTotal(shoppingCart);
  withLogging(
    () => {
      // do something
    },
    (error) => {
      // do something
    }
  );
  // setCartTotalDom(total)
  // updateShippingIcons(shoppingCart)
  // updateTaxDom(total)
  // logAddToCart()
}

export const saveUserDataWithLogging = wrapLogging((id: string) => {
  // save user data
});
