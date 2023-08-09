exports.isProductDataValidated = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
      }
    
      const expectedKeys = ['title', 'description', 'price'];
    
      if (Object.keys(obj).length !== expectedKeys.length) {
        return false;
      }
    
      if (!expectedKeys.every(key => Object.prototype.hasOwnProperty.call(obj, key))) {
        return false;
      }

      if (isNaN(Number(obj.price))) {
        return false;
      }

      if (Number(obj.price) < 0) {
        return false;
      }
    
      if (typeof obj.title !== 'string' || typeof obj.description !== 'string' || typeof Number(obj.price) !== 'number') {
        return false;
      }
    
      if (obj.title === '' || obj.description === '' || obj.price === '' ||
          obj.title === undefined || obj.description === undefined || obj.price === undefined) {
        return false;
      }

      return true;
}


exports.isEditProductDataValidated = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
      return false;
    }
  
    const expectedKeys = ['id', 'title', 'description', 'price'];
  
    if (Object.keys(obj).length !== expectedKeys.length) {
      return false;
    }
  
    if (!expectedKeys.every(key => Object.prototype.hasOwnProperty.call(obj, key))) {
      return false;
    }

    if (isNaN(Number(obj.price))) {
      return false;
    }

    if (isNaN(Number(obj.id))) {
      return false;
    }

    if (Number(obj.price) < 0) {
      return false;
    }

    if (Number(obj.id) < 0) {
      return false;
    }

    if (!Number.isInteger(Number(obj.id))) {
      return false;
    }
  
    if (typeof Number(obj.id) !== 'number' || typeof obj.title !== 'string' || typeof obj.description !== 'string' || typeof Number(obj.price) !== 'number') {
      return false;
    }
  
    if (obj.id === '' || obj.title === '' || obj.description === '' || obj.price === '' ||
        obj.id === undefined || obj.title === undefined || obj.description === undefined || obj.price === undefined) {
      return false;
    }

    return true;
}