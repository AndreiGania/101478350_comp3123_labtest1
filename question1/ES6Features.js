function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      return reject("Input an array");
    }

    const stringItems = mixedArray
      .filter(item => typeof item === "string")
      .map(str => str.toLowerCase());

    resolve(stringItems);
  });
}

const mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
  .then(result => console.log(result))
  .catch(err => console.error("Error:", err));
