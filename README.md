# ReactCourse

food Ordering App
/\*\*

- Header
- Logo
- nav Items
- Body
- -Search
- -Restaurant Container
- -Restaurant cards
-        name,img,Author,Price,year,Offers
- Footer
- -CopyRight
- -Links
- -Address
- -Contact
  \*/

  React Hooks(Normal JS functions)
  -useState()-state variable----const [state, setState] = useState(initialValue); for rerendering when the state is changing

  -useEffect()----whatever we need to call after the render
  Dependency Array When Effect Runs
  Not provided After every render
  [] Once after initial render
  [count] When count changes
  [a, b] When a or b changes

  Loads---->Render---->Api calls---->render

  shimmer UI---before loading th edata just show a mock ui till we get the data

For Routing
npm package react-router-dom

we are using clienty side ROuting

Old apprach Serverside Routing
