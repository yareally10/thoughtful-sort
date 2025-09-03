## How to Run

```bash
node sort.js
```

Update the number in the main function to test different test cases.

## Sort Method

The `sort(width, height, length, mass)` function categorizes packages into three stacks:

- **STANDARD**: Normal packages (not bulky or heavy)
- **SPECIAL**: Bulky or heavy packages  
- **REJECTED**: Both bulky and heavy packages

## Example Usage

```javascript
const result = sort(20, 10, 100, 150);
console.log(result); // "REJECTED" (heavy and bulky)
```