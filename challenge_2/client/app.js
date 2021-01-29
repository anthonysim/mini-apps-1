const renderOnPage = function ({ data }) {
  let table = document.getElementById('table')

  let html = ''
  for (let i = 0; i < data.length; i++) {
    let { firstName, lastName, county, city, role, sales } = data[i];

    html += `<tr><td>${firstName}</td><td>${lastName}</td><td>${county}</td><td>${city}</td><td>${role}</td><td>${sales}</td></tr>`
  }

  table.innerHTML = `<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>County</th>
    <th>City</th>
    <th>Role</th>
    <th>Sales</th>
  </tr>` + html;
}



// AJAX POST REQUEST
let input = document.getElementById('FileInput')
let data;

input.addEventListener('change', e => {
  const reader = new FileReader();
  // console.log(input.files)
  reader.onload = () => {
    data = reader.result;
    // console.log(data)
  }

  reader.readAsText(input.files[0])
})


$('#submitBtn').click(function (e) {
  e.preventDefault();
  input.value = '';

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/upload',
    data: data,
    contentType: 'application/json',
    processedData: false,

    success: function (data) {
      console.log('SUCCESS!', data)
      renderOnPage(data)
    },

    error: function (err) {
      console.error('ERROR', err)
    }
  })
})
