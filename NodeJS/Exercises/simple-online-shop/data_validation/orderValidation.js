exports.isOrderDataValidated = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
      }
    
      const expectedKeys = ['name', 'surname', 'productIDsInCart', 'productQtyInCart'];
    
      if (Object.keys(obj).length !== expectedKeys.length) {
        return false;
      }
    
      if (!expectedKeys.every(key => Object.prototype.hasOwnProperty.call(obj, key))) {
        return false;
      }

    
      if (typeof obj.name !== 'string' || typeof obj.surname !== 'string') {
        return false;
      }
      
      if(!Array.isArray(obj.productIDsInCart) || !Array.isArray(obj.productQtyInCart)) {
        return false;
      }

      if(obj.productIDsInCart.length === 0 || obj.productQtyInCart.length === 0) {
        return false;
      }

      if(obj.productIDsInCart.length !== obj.productQtyInCart.length) {
        return false;
      }


      const arrayElementsAreCorrectNumbers = (arr) => {
        let result = true;
        arr.forEach(el =>{
            if(isNaN(el)) {
                result = false;
            }
            else if (!Number.isInteger(el)) {
                result = false;
            }
          })

          return result;
      }
      
      if(!arrayElementsAreCorrectNumbers(obj.productIDsInCart)) {
        return false;
      }
      
      if(!arrayElementsAreCorrectNumbers(obj.productQtyInCart)) {
        return false;
      }
      

      const allUnique = arr => arr.length === new Set(arr).size; //helper function
      if(!allUnique(obj.productIDsInCart)) {
        return false;
      }

    
      if (obj.name === '' || obj.surname === '' ||
          obj.name === undefined || obj.surname === undefined) {
        return false;
      }

      return true;
};
