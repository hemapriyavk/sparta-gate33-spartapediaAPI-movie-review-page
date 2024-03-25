
$(document).ready(function () {
  listing();
});

function listing() {
  $('#cards-box').empty()
  $.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/post/en",
    data: {},
    success: function (response) {
      let movies = response['movies']
      for (let i = 0; i < movies.length; i++) {
        let movie = movies[i]
        let title = movie['title']
        let desc = movie['desc']
        let image = movie['image']
        let comment = movie['comment']
        let star = movie['star']

        let star_image = '⭐'.repeat(star)

        let temp_html = `
        <div class="col">
          <div class="card h-100">
            <img src="${image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${desc}</p>
              <p>${star_image}</p>
              <p class="mycomment">${comment}</p>
            </div>
          </div>
        </div>
        `
        $('#cards-box').append(temp_html)
      }
    }
  })
}

function open_box() {
  $('#post-box').show()
}
function close_box() {
  $('#post-box').hide()
}
