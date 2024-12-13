// Task 01:
// Iterating with Async/Await:

// function timer(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }

// async function iterateWithAsyncAwait(arr) {
//   for (var elt of arr) {
//     console.log(elt);
//     await timer(1000);
//   }
// }

// iterateWithAsyncAwait(["banana", "orange", "apple"]);
//________________________________________________________________________________________
// Task 02:
// Awaiting a Call:

// function fetchData(url) {
//   return new Promise(resolve=> setTimeout(()=>resolve(`success to fetch data from ${url}`), 1000))
// }

// async function awaitCall(url) {
//   const data = await fetchData(url);
//   console.log(data)
// }

// awaitCall("http://example/api")
//________________________________________________________________________________________
// Task 03:
// Awaiting Concurrent Requests:

// function apiCall1() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("successfully fetching data1..."), 3000)
//   );
// }
// function apiCall2() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("successfully fetching data2..."), 1000)
//   );
// }

// async function concurrentRequests() {
//   const [data1, data2] = await Promise.all([apiCall1(), apiCall2()]);
//   console.log(data1, data2);
// }

// concurrentRequests();
//________________________________________________________________________________________
// Task 04:
// Awaiting Parallel Calls:

// function fetchData(url) {
//   return new Promise((resolve) =>
//     setTimeout(
//       () => {
//         resolve(`fetching data from ${url}`);
//       },

//       2000
//     )
//   );
// }

// async function parallelCalls(urls) {
//     const tab = await Promise.all(urls.map((url) => (fetchData(url))));
//     tab.forEach(elt=>console.log(elt))

// }

// parallelCalls(["api1", "api2", "api3", "api4"]);