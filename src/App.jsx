import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Layout, Home, Team, Blog, About, Services, Contact } from './components';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="team" element={<Team />}/>
      <Route path="blog" element={<Blog />}/>
      <Route path="about" element={<About />}/>
      <Route path="services" element={<Services />}/>
      <Route path="contact" element={<Contact />}/>
    </Route>
));
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
