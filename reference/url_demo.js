const url = require("url");

const myUrl = new URL("https://google.com");

// Serialized URL
console.log("🚀myUrl.href: ", myUrl.href);
console.log("🚀myUrl.toString: ", myUrl.toString());
//Host (root domain)
console.log("🚀myUrl.host: ", myUrl.host);
//Host name (does not get port)
console.log("🚀myUrl.hostname: ", myUrl.hostname);
//Path name
console.log("🚀myUrl.pathname: ", myUrl.pathname);
//Serialized query
console.log("🚀myUrl.search: ", myUrl.search);
//Params object
console.log("🚀myUrl.searchParams: ", myUrl.searchParams);
//Add param
myUrl.searchParams.append("abc", "123");
console.log("🚀myUrl.searchParams(after appending): ", myUrl.searchParams);
//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
