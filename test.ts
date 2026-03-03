const inputValue = "javascript://example.com";
const lowerInput = inputValue.toLowerCase();
const isAllowed = lowerInput.startsWith("http://") || lowerInput.startsWith("https://") || lowerInput.startsWith("file://") || lowerInput.startsWith("lynx://") || lowerInput.startsWith("assets://") || lowerInput.startsWith("lynx_assets://");
console.log(isAllowed);
