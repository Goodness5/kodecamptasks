const prompt = require("prompt-sync")();

const cart = {
  cartArray: [],

  addToCart(product) {
    this.cartArray.push(product);
  },

  removeFromCart(product) {
    const index = this.cartArray.indexOf(product);
    if (index !== -1) {
      this.cartArray.splice(index, 1);
    }
  },

  standBy() {
    while (true) {
      const command = prompt('Enter a command (add, remove, show-items, length, exit): ');
      switch (command) {
        case 'add':
          this.addToCart(prompt('Enter product name:'));
          console.log('product added')
          break;
        case 'remove':
          this.removeFromCart(prompt('Enter product name to remove:'));
          console.log('product removed')
          break;
        case 'show-items':
            if(this.cartArray.length<1){
                console.log('cart is empty')
            }
            else{

                console.log(this.cartArray.join(', '));
            }
          break;
        case 'length':
          console.log(`Number of products in cart: ${this.cartArray.length}`);
          break;
        case 'exit':
          console.log('Exiting program. Goodbye!');
          process.exit(); // Terminate the program
        default:
          console.log('Invalid command. Please try again.');
      }
    }
  }
};

cart.standBy();



