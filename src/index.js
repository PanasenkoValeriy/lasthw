// 1
const delayedPromise = (value, delay) =>
  new Promise(resolve => setTimeout(() => resolve(value), delay));

const promises = [
  delayedPromise('First', 1000),
  delayedPromise('Second', 1300),
  delayedPromise('Third', 2000),
  delayedPromise('Fourth', 3000),
  delayedPromise('Fifth', 2500),
];

Promise.all(promises)
  .then(results =>
    results.forEach((result, idx) =>
      console.log(`Promise ${idx + 1}: ${result}`)
    )
  )
  .catch(console.log);

//   2
const randomDelay = value => {
  return new Promise(resolve =>
    setTimeout(() => resolve(value), Math.random() * 4000 + 1000)
  );
};

const promises2 = [
  randomDelay('Value 1'),
  randomDelay('Value 2'),
  randomDelay('Value 3'),
  randomDelay('Value 4'),
  randomDelay('Value 5'),
];

Promise.race(promises2)
  .then(result => console.log('The fastest promise:', result))
  .catch(console.log);
