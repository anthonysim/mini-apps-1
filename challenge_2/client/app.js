// AJAX POST REQUEST
let input = document.getElementById('FileInput')
let data;

input.addEventListener('change', e => {
  const reader = new FileReader();
  console.log(input.files)
  reader.onload = () => {
    data = reader.result;
    console.log(data)
  }

  reader.readAsText(input.files[0])
})


$('#submitBtn').click(function (e) {
  e.preventDefault();

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/upload',
    data: data,
    contentType: 'application/json',
    processedData: false,

    success: function (data) {
      console.log('SUCCESS!', data)
    },

    error: function (err) {
      console.error('ERROR', err)
    }
  })
})
