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

You must use useEffect (or useLayoutEffect) for:
⭐DOM interaction
⭐Event listeners
⭐API calls
⭐Subscriptions
⭐Timers
It ensures side-effects run safely and predictably.

Loads---->Render---->Api calls---->render

shimmer UI---before loading th edata just show a mock ui till we get the data

For Routing
npm package react-router-dom

we are using client side ROuting
✅ 1. What is a Single Page Application (SPA)?
A Single Page Application is a web app that loads a single HTML page once and dynamically updates the content using JavaScript without reloading the entire page.

Old apprach Serverside Routing

Dynamic Routing
{
path: "/restaurants/:resId", //Dynamic
element: <RestaurantMenu />, ------------------>in the root file
},
mport { useParams } from "react-router-dom"; //to get the dynamic params
const { resId } = useParams(); ------------------>getting path param
