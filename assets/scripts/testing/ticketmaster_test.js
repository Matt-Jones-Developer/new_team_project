let data = fetch('https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=GbIS7ZHqNdNaR8p53t0s3R87G5IbJWSB')
  .then(res => res.json())

  // simply adding the {} allows you to access the data!
  .then(data => {
    
    console.log(data)
    console.log(data._embedded.attractions[0])
  })


// console.log(data)
// console.log(data._embedded.attractions[0])

