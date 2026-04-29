function calculateTotals() {
  const amountInputs = document.querySelectorAll('.amount-input');
  let subtotal = 0;
  amountInputs.forEach(function(input) {
    const val = parseFloat(input.value);
    if (!isNaN(val) && val > 0) subtotal += val;
  });

  const taxRate    = parseFloat(document.getElementById('tax-rate').value)    || 0;
  const otherCosts = parseFloat(document.getElementById('other-costs').value) || 0;
  const taxAmount  = subtotal * (taxRate / 100);
  const total      = subtotal + taxAmount + otherCosts;

  document.getElementById('display-subtotal').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('display-total').textContent    = '$' + total.toFixed(2);
}

document.addEventListener('input', function(e) {
  if (
    e.target.classList.contains('amount-input') ||
    e.target.id === 'tax-rate' ||
    e.target.id === 'other-costs'
  ) {
    calculateTotals();
  }
});

document.getElementById('add-row-btn').addEventListener('click', function() {
  const tbody = document.getElementById('item-tbody');
  const tr = document.createElement('tr');
  tr.innerHTML =
    '<td><input type="text" placeholder="Enter item description" /></td>' +
    '<td><input type="number" class="amount-input" placeholder="0.00" min="0" step="0.01" /></td>';
  tbody.appendChild(tr);
});
