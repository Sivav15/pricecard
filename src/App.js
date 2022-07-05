import './App.css';
import Pricecard from './Pricecard';
function App() {

  let data = [
    {
      plan:"Free",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:false,
      phone:"Dedicated Phone Support",
      isPhone:false,
      subdomain:"Free Sub Domains",
      isSubdomain:false,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"Plus",
      price:"9",
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:true,
      phone:"Dedicated Phone Support",
      isPhone:true,
      subdomain:"Free Sub Domains",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"Pro",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      publicProject:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProject:"Unlimited Private Projects",
      isPrivateProject:true,
      phone:"Dedicated Phone Support",
      isPhone:true,
      subdomain:"Unlimited Free Sub Domains",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
  ]

  return( <div>
<section className="pricing py-5">
  <div className="container">
    <div className="row">
    <Pricecard data = {data[0]} />
    <Pricecard  data = {data[1]}/>
    <Pricecard  data = {data[2]}/>
    
      </div>
  </div>
</section>
  </div>)

}

export default App;
