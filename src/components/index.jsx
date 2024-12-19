import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
//Homepage routes
import Homepage from 'components/Homepage/index'
import DesignWebsite from 'components/Homepage/Service/Design_Website'
import MaintainWebsite from 'components/Homepage/Service/Maintain_Website'
import Domain from 'components/Homepage/Service/Domain'
import AboutHomepage from 'components/Homepage/About'
import BlogHomepage from 'components/Homepage/Blog'
import LandingPage from 'components/Homepage/Category/Landing_page'
import WebsiteBlog from 'components/Homepage/Category/Website_blog_portfolio'
import WebsiteCommerce from 'components/Homepage/Category/Website_commerce'
import WebsiteEducation from 'components/Homepage/Category/Website_education'
import WebsiteEvent from 'components/Homepage/Category/Website_event'
import WebsiteDashboard from 'components/Homepage/Category/Website_dashboard'
import WebsiteRestaurantCoffee from 'components/Homepage/Category/Website_restaurant_coffee'

// KLD0512's website
import KLD0512 from 'components/List_Website/Landing_page/KLD0512/index'

// KLD1312's website
import KLD1312 from 'components/List_Website/Website_education/KLD1312/index'
import HeaderKLD1312 from 'components/List_Website/Website_education/KLD1312/Header'
import FooterKLD1312 from 'components/List_Website/Website_education/KLD1312/Footer'
import ContactKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Contact'
import AboutKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/About'
import BlogKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Blog'
import BlogDetailKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Blog/Blog_detail'
import CourseKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Course'
import CourseDetailKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Course/Course_detail'
import PaymentKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Payment'
import AccountKLD1312 from 'components/List_Website/Website_education/KLD1312/Page/Account'

// KLD1812's website
import KLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812'
import HeaderKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Header'
import FooterKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Footer'
import FirstLayoutKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Page/First_layout'
import SecondLayoutKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Page/Second_layout'
import ThirdLayoutKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Page/Third_layout'
import FourthLayoutKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Page/Fourth_layout'
import FifthLayoutKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Page/Fifth_layout'
import SixthLayoutKLD1812 from 'components/List_Website/Website_restaurant_coffee/KLD1812/Page/Sixth_layout'

function App() {
  const page = [
    { path: "/", location: Homepage },
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
    { path: "/website/template/KLD1312/blog/detail", location: BlogDetailKLD1312 },
    { path: "/website/template/KLD1312/course", location: CourseKLD1312 },
    { path: "/website/template/KLD1312/course/detail/:idCourse", location: CourseDetailKLD1312 },
    { path: "/website/template/KLD1312/payment", location: PaymentKLD1312 },
    { path: "/website/template/KLD1312/account", location: AccountKLD1312 }
  ]
  const websiteKLD1812 = [
    { path: "/website/template/KLD1812", location: KLD1812 },
    { path: "/website/template/KLD1812/cafe-kass", location: FirstLayoutKLD1812 },
    { path: "/website/template/KLD1812/do-chay", location: SecondLayoutKLD1812 },
    { path: "/website/template/KLD1812/ngoi-nha-banh", location: ThirdLayoutKLD1812 },
    { path: "/website/template/KLD1812/ky-nghi", location: FourthLayoutKLD1812 },
    { path: "/website/template/KLD1812/tiec-rieng-tu", location: FifthLayoutKLD1812 },
    { path: "/website/template/KLD1812/ve-chung-toi", location: SixthLayoutKLD1812 },
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
        {websiteKLD1812.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<><HeaderKLD1812/><TagName1 /><FooterKLD1812/></>}
          />
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
    </Router>
  );
}

export default App;
