
// GOOD !!!
const createDog = (url) => {
    return `<img src=${url} />`
  }
  
  const getRandomDog = (successCB) => {
    $.ajax({
      url: 'https://dog.ceo/api/breeds/image/random',
      type: 'GET',
      success: successCB,
      error: function(error){
        console.error(error)
      }
    })
  }
  
  const dogController = () => {
    getRandomDog(function(model){
      const view = createDog(model.message)
      $('.dogContainer').empty()
      $('.dogContainer').append(view)
    })
  }
  
  $('#getDog').click(dogController)
  
  // BAD!!!!!
  
  // $('#getDog').click(function(){
  //   $.ajax({
  //     url: 'https://dog.ceo/api/breeds/image/random',
  //     type: 'GET',
  //     success: function(model){
  //     // const view = createDog(model.message)
  //     $('.dogContainer').empty()
  //     $('.dogContainer').append(`<img src=${model.message} />`)
  //   },
  //     error: function(error){
  //       console.error(error)
  //     }
  //   })
  // })
  
  
  
  
  
  
  