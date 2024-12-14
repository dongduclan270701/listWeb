import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
//Homepage routes
import Homepage from 'components/Homepage/index'
import DesignWebsite from 'components/Homepage/Service/Design_Website'
import MaintainWebsite from 'components/Homepage/Service/Maintain_Website'
import Domain from 'components/Homepage/Service/Domain'
import AboutHomepage from 'components/Homepage/About'
import BlogHomepage from 'components/Homepage/Blog'
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

// KLD0512's website
import KLD1312 from 'components/List_Website/Website_education/KLD1312/index'
import HeaderKLD1312 from 'components/List_Website/Website_education/KLD1312/Header'
import FooterKLD1312 from 'components/List_Website/Website_education/KLD1312/Footer'
import ContactKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Contact'
import AboutKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/About'
import BlogKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Blog'
import BlogDetailKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Blog/Blog_detail'
import CourseKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Course'
function App() {
  const page = [
    { path: "/", location: Homepage },
    { path: "/category/portfolio-gioi-thieu", location: Portfolio },
    { path: "/category/landing-page", location: LandingPage },
    { path: "/category/blog-ca-nhan", location: WebsiteBlog },
    { path: "/category/website-to-chuc-su-kien", location: WebsiteEvent },
    { path: "/category/website-thuong-mai-dien-tu", location: WebsiteCommerce },
    { path: "/category/website-nha-hang-quan-ca-phe", location: WebsiteRestaurantCoffee },
    { path: "/category/website-giao-duc", location: WebsiteEducation },
    { path: "/category/website-dashboard", location: WebsiteDashboard },
    { path: "/service/thiet-ke-website-rieng", location: DesignWebsite },
    { path: "/service/ten-mien-website-domain", location: Domain },
    { path: "/service/bao-tri-sua-chua-website", location: MaintainWebsite },
    { path: "/blog", location: BlogHomepage },
  ]
  const websiteKLD0512 = [
    { path: "/website/template/KLD0512", location: KLD0512 },
  ]
  const websiteKLD1312 = [
    { path: "/website/template/KLD1312", location: KLD1312 },
    { path: "/website/template/KLD1312/contact", location: ContactKLD1312 },
    { path: "/website/template/KLD1312/about", location: AboutKLD1312 },
    { path: "/website/template/KLD1312/blog", location: BlogKLD1312 },
    { path: "/website/template/KLD1312/blog-detail", location: BlogDetailKLD1312 },
    { path: "/website/template/KLD1312/course", location: CourseKLD1312 }
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
        {websiteKLD0512.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<><TagName1 /></>}
          />
        })}
        {websiteKLD1312.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<><HeaderKLD1312/><TagName1 /><FooterKLD1312/></>}
          />
        })}
      </Routes>
      
    </Router>
  );
}

export default App;
