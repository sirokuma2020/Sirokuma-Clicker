function non_juuhukiu_ransu(max,min) {
    let data = Array(max)
    for (let i = 0; i < max; i++) {
      data[i] = i + 1 
    }
    let this_return = []
    for (let i = 0; i < max; i++) {
      let aiueo = Math.floor(Math.random() * (data.length - min + 1)) + min
      console.log(data[aiueo - 1]);
      this_return[i] = data[aiueo - 1]
      data.splice(aiueo-1,1)
      console.log(data)
      
      
    }
    return this_return
  }