Directly list of essential React concepts for production-ready development:

* **JSX & Component Architecture:** Functional components, props passing, composition vs inheritance, and conditional rendering.
* **Core React Hooks:**
* `useState` (state management)
* `useEffect` (side effects & cleanup functions)
* `useRef` (DOM access & mutable variables without re-renders)
* `useMemo` & `useCallback` (performance optimization & memoization)


* **Custom Hooks:** Reusable stateful logic isolate karna aur create karna.
* **Component Lifecycle & Re-rendering:** React render cycle, Virtual DOM reconciliation, dependency arrays, aur unwanted re-renders prevent karna.
* **State Management:**
* Context API (`useContext`) for global light state.
* External State Managers (Zustand, Redux Toolkit, ya React Query / TanStack Query server state ke liye).


* **Forms & Validation:** Controlled vs Uncontrolled components, aur libraries like React Hook Form with Zod/Yup.
* **Routing:** Dynamic routes, nested routes, query params, aur protected/private routes (React Router v6+).
* **API Integration & Async Handling:** Fetch/Axios integration, loading/error states, race conditions handle karna, aur async/await pattern.
* **Error Boundaries & Performance:** Catching rendering errors gracefully, Lazy Loading (`React.lazy`, `Suspense`), aur Code Splitting.


### IF VALUE IS TOO LARGE AND REQUIRED HEAVY CALCULATION
    - use useMemo around the function to avoid extra renders with other components

### IF A COMPONENT CONTAINS ONLY STATIC DATA
    - use Reast.memo around the component to avoid re-renders

### IF A FUNCTION IS WORKING TO GET SOME DATA
    - use callback() around it to avoid any sort or reflect


# REACT HOOKS
### STATE MANAGEMENT HOOKS
    - useState
    - useReducer
    - useSyncExternalStore

### REF HOOKS
    - useRef
    - useImperativeHandle

### CONTEXT HOOKS
    - useContext

### TRANSITION HOOKS
    - useTransition
    - useDefferedValue

### RANDOM HOOKS
    - useDebugValue
    - useId

### PERFORMANCE HOOKS
    - useMemo
    - useCallback

### EFFECT HOOKS
    - useEffect
    - useLayoutEffect
    - useInsertionEffect

### REACT 19 HOOKS
    - useFormStatus
    - useFormState
    - useOptimistic
    - use



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
