# React useEffect Cleanup Function Memory Leak
This example demonstrates a common issue in React where the cleanup function in `useEffect` doesn't fully prevent memory leaks when a component unmounts before a timer completes. The `setTimeout` function continues to run, even after the component is unmounted, causing potential issues.

## Bug Description
The `useEffect` hook has a cleanup function that's supposed to run before the component unmounts, allowing for cleanup actions like canceling timers. However, in this case, the `setTimeout`'s asynchronous nature causes the cleanup function to not be triggered in time if the component unmounts early. This leads to potential memory leaks and unexpected behavior.

## Solution
To resolve this issue, use `useRef` to manage the timeout ID and check if the component is still mounted before updating the state.