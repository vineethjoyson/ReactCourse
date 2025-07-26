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

  <React Hooks>(Normal JS functions) -<useState>()-state variable----const [state, setState] = useState(initialValue); for rerendering when the state is changing

  -<useEffect>()----whatever we need to call after the render
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

<shimmer UI->--before loading th edata just show a mock ui till we get the data

For Routing
npm package react-router-dom

we are using client side ROuting
✅ 1. What is a Single Page Application (SPA)?
A Single Page Application is a web app that loads a single HTML page once and dynamically updates the content using JavaScript without reloading the entire page.

Old apprach Serverside Routing

<Dynamic Routing>
{
path: "/restaurants/:resId", //Dynamic
element: <RestaurantMenu />, ------------------>in the root file
},
mport { useParams } from "react-router-dom"; //to get the dynamic params
const { resId } = useParams(); ------------------>getting path param

<lazy loading, Dynamic bundling>
//so whats happening here is we are using lazy loading or code splitting. so that when it bundles and render this part of code wont be loaded in a single file. this chunk will be only laoded when the need is there. so the main importyant thing thios makes our apps lighter and more optimised when we are working on big prod heavuy applications
import React, { lazy, Suspense } from "react"; //lazy and suspence for the lazy loading

, //Wrappping im suspence willl give a fallback by the gtime the other componet is loading what need to be displayed
{
path: "/grocery", //Dynamic
element: (
<Suspense fallback={<h1>Loading....</h1>}>
<Grocery />
</Suspense>
),
},

<Tailwind CSS>----> styling
others used
material ui
Saas Sacss, Chakra ui

<Higer order components>
take a componet enhances and return a component  <open> rag is build as an Higer order component

<Accordion>
Liftinng state up <imp concept>
lifting the state so control is on parent component

<React context> we can managae the the info in a centralized space so all the components can acccess also avoid the pop drilling
so basically we need a context filee where we create the context info. and we use the useContext hook to access and mainpulate that
