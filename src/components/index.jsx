import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
//Homepage routes
import Homepage from 'components/Homepage/index'

import AboutHomepage from 'components/Homepage/About'
import LandingPage from 'components/Homepage/Category/Landing_page'
import Portfolio from 'components/Homepage/Category/Portfolio'
import WebsiteBlog from 'components/Homepage/Category/Website_blog'
import WebsiteCommerce from 'components/Homepage/Category/Website_commerce'
import WebsiteEducation from 'components/Homepage/Category/Website_education'
import WebsiteEvent from 'components/Homepage/Category/Website_event'
import WebsiteDashboard from 'components/Homepage/Category/Website_dashboard'
import WebsiteRestaurantCoffee from 'components/Homepage/Category/Website_restaurant_coffee'

// KLD0512's website
import KLD0512 from 'components/List_Website/Landing_page/KLD0512/index'
function App() {
  const page = [
    { path: "/", location: Homepage },
    { path: "/category/portfolio-ca-nhan", location: Portfolio },
    { path: "/category/landing-page", location: LandingPage },
    { path: "/category/blog-ca-nhan", location: WebsiteBlog },
    { path: "/category/website-to-chuc-su-kien", location: WebsiteEvent },
    { path: "/category/website-thuong-mai-dien-tu", location: WebsiteCommerce },
    { path: "/category/website-nha-hang-quan-ca-phe", location: WebsiteRestaurantCoffee },
    { path: "/category/website-giao-duc", location: WebsiteEducation },
    { path: "/category/website-dashboard", location: WebsiteDashboard },
  ]
  const pageSellWebsite = [
    { path: "/website/template/KLD0512", location: KLD0512 }
  ]
  return (
    <Router>
      <Routes>
        {page.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<><TagName1 /></>}
          />
        })}
        <Route path={'/aboutMe'} element={<><AboutHomepage/></>}/>
        {pageSellWebsite.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<><TagName1 /></>}
          />
        })}
      </Routes>
      
    </Router>
  );
}

export default App;
