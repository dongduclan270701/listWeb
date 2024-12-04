import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
//Homepage routes
import Homepage from 'components/Homepage/index'
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
import About from 'components/Homepage/About'

function App() {
  const page = [
    { path: "/", location: Homepage },

  ]
  // const pageSellWebsite = [
  //   { path: "/sell", location: HomepageSellWebsite }
  // ]
  return (
    <Router>
      <div>
      </div>
      <Routes>
        {page.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<><HeaderHomepage/><TagName1 /></>}
          />
        })}
        <Route path={'/aboutMe'} element={<><About/></>}/>
        {/* {pageSellWebsite.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<><HeaderSellWebsite /><TagName1 /><FooterSellWebsite /></>}
          />
        })} */}
      </Routes>
      
    </Router>
  );
}

export default App;
