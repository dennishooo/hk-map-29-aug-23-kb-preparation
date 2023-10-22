const salary = 3000;

const getPromiseFromBf = new Promise((resolve, reject) => {
  if (salary > 50000) {
    resolve("we can get married la");
  } else {
    reject("we break up la");
  }
});

getPromiseFromBf
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
