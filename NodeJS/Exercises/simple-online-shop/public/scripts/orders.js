// scripts/orders.js
document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.edit-button');
    const editPopup = document.querySelector('.edit-popup');
    const orderIdInput = document.querySelector('.order-id-input');
    const newStatusSelect = document.querySelector('.new-status');
  
    editButtons.forEach(button => {
      button.addEventListener('click', () => {
        const orderId = button.getAttribute('data-orderid');
        orderIdInput.value = orderId;
        editPopup.style.display = 'flex';
      });
    });
  
    editPopup.addEventListener('click', event => {
      if (event.target === editPopup || event.target.classList.contains('popup-close')) {
        editPopup.style.display = 'none';
      }
    });
    editPopup.style.display = 'none'; //at the first load of the page
  });