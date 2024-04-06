const euroCheck = document.getElementById('euroCheck');
const rows = document.querySelectorAll('#standings tbody tr')

euroCheck.addEventListener('change', function() {
  if (this.checked) {
    let count = 0;
    rows.forEach(row => {
      if (count < 5) {
        row.style.display = 'table-row'
        count++;
      } else {
        row.style.display = 'none'
      }
    })
  } else {
    rows.forEach(row => {
      row.style.display = 'table-row'
    })
  }
})