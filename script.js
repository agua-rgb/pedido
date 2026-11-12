(() => {
  const cartView = document.getElementById('cartView');
  const confirmationView = document.getElementById('confirmationView');
  const ordersView = document.getElementById('ordersView');
  const genericView = document.getElementById('genericView');

  const shipBtn = document.getElementById('shipBtn');
  const modal = document.getElementById('deliveryModal');
  const closeModal = document.getElementById('closeModal');
  const acceptBtn = document.getElementById('acceptBtn');

  let orderConfirmed = false;

  function show(view) {
    cartView.hidden = view !== 'cart';
    confirmationView.hidden = view !== 'confirmation';
    ordersView.hidden = view !== 'orders';
    genericView.hidden = view !== 'generic';
    window.scrollTo({top:0, behavior:'smooth'});
  }

  shipBtn.addEventListener('click', () => {
    modal.hidden = false;
  });

  closeModal.addEventListener('click', () => {
    modal.hidden = true;
  });

  acceptBtn.addEventListener('click', () => {
    orderConfirmed = true;
    modal.hidden = true;
    show('confirmation');
  });

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.view;
      if (target === 'orders') {
        show(orderConfirmed ? 'orders' : 'generic');
      } else if (target === 'home') {
        show(orderConfirmed ? 'confirmation' : 'cart');
      } else {
        show('generic');
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.hidden = true;
  });
})();
