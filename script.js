  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000));  // 1 second delay
    }
  }
  
  async function awaitCall() {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve("Data fetched from API"), 2000)
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }
  
  async function awaitCall() {
    try {
      const response = await new Promise((resolve, reject) =>
        setTimeout(() => reject("API call failed!"), 2000)
      );
      console.log(response);
    } catch (error) {
      console.error("Oops! Something went wrong. Please try again later.", error);
    }
  }

  async function asyncFunction1() {
    await new Promise(resolve => setTimeout(() => {
      console.log("Function 1 complete");
      resolve();
    }, 1000));
  }
  
  async function asyncFunction2() {
    await new Promise(resolve => setTimeout(() => {
      console.log("Function 2 complete");
      resolve();
    }, 1000));
  }
  
  async function asyncFunction3() {
    await new Promise(resolve => setTimeout(() => {
      console.log("Function 3 complete");
      resolve();
    }, 1000));
  }
  
  async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }
  
  async function concurrentRequests() {
    try {
      const apiCall1 = new Promise((resolve) =>
        setTimeout(() => resolve("API Call 1 complete"), 2000)
      );
  
      const apiCall2 = new Promise((resolve) =>
        setTimeout(() => resolve("API Call 2 complete"), 3000)
      );
  
      const results = await Promise.all([apiCall1, apiCall2]);
      console.log("Results:", results);
    } catch (error) {
      console.error("Error in concurrent requests:", error);
    }
  }

  async function parallelCalls(urls) {
    try {
      const fetchData = urls.map(url => 
        fetch(url)
          .then(response => response.json())
          .catch(error => `Error fetching ${url}: ${error}`)
      );
  
      const results = await Promise.all(fetchData);
      console.log("All data fetched:", results);
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  }
  
  
  
  
  
  
  