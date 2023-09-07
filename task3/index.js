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
  
    standBy(command) {
      switch (command) {
        case 'add':
          this.addToCart(prompt('Enter product name:'));
          break;
        case 'remove':
          this.removeFromCart(prompt('Enter product name to remove:'));
          break;
        case 'show-items':
          console.log(this.cartArray.join(', '));
          break;
        case 'length':
          console.log(`Number of products in cart: ${this.cartArray.length}`);
          break;
        case 'exit':
          console.log('Exiting program. Goodbye!');
          break;
        default:
          console.log('Invalid command. Please try again.');
      }
    }
  };
  
  
  cart.standBy('add'); 
  cart.standBy('add'); 
  cart.standBy('show-items');
  cart.standBy('length'); 
  cart.standBy('remove'); 
  cart.standBy('show-items');
  cart.standBy('exit'); 
  