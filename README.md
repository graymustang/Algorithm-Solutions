# Algorithm Solutions

JavaScript solutions for common algorithm practice problems. The repo is organized by problem, with solution files named by approach when there is more than one implementation.

## Structure

```text
algorithms/
  palindrome-string/
    brute-force.js
    optimized,js
  reverse-string/
    optimized.js
  two-sum/
    brute-force.js
    optimized.js
  valid-parentheses/
    optimized.js
test/
  test.js
```

## Running a Solution

Each solution file includes a small `main()` function with sample input. Run any file directly with Node:

```powershell
node algorithms\two-sum\optimized.js
```

Use the same pattern for other files:

```powershell
node algorithms\reverse-string\optimized.js
node algorithms\palindrome-string\brute-force.js
```

## Problems Included

- `two-sum`: brute-force nested loop and optimized hash map approaches.
- `palindrome-string`: stack-based and two-pointer approaches.
- `reverse-string`: two-pointer in-place character swap approach.
- `valid-parentheses`: stack-based approach in progress.

## Local Playground

Files named `test.js` are ignored by Git so they can be used as local scratch files without being pushed to the remote repository.

