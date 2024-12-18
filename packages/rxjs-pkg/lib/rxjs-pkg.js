const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 3000)
})


pro.then(res => {
  console.log(`liji1 ${res} ${Date.now()}`)
});


setTimeout(() => {
  console.log(`setTimeout`)
  pro.then(res => {
    console.log(`liji2 ${res} ${Date.now()}`)
  });
}, 1000)