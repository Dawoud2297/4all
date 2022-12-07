import React, { useEffect } from 'react'
// import Pro from "../API/http"
import Footer from './Footer'
import Header from './Header'
import httpClient from 'react-http-client';
import { useParams } from 'react-router-dom';


const Providers = ({ providers }) => {

  // const [provider, setProvider] = useState({})
  let { id } = useParams()

  let imgId = providers.filter(pro => (
    pro === id
  ))

  useEffect(() => {
    const res = httpClient.get('https://4all.ltd/services/api/ads/companies?page_count=5')
    console.log(res)
    // const pros = async () => {
    //   await Pro.getProvider().then(res => {
    //     setProviders(res.data)
    //     console.log(res.data)
    //   })
    // pros()
  }, [])

  // console.log(providers)

  return (
    <div>
      <Header />
      <div className='Provider-Container'>
        <div className='provider-name'>
          <span
            style={{
              background: 'rgb(245, 245, 245)',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px'
            }}
          >
            <img
              src={`images/resources/${imgId}`}
              alt='provider'
              width="70"
            />
          </span>
        </div>
        <div className='overview-feature'>
          <div className='overview'>
            <h3>Overview</h3>
            <p>
              Amazon’s expansion in the publishing industry will come from its creation of
              new technologies like their Kindle product lines,
              and a continued expansion into more and more markets.
              Every author should become familiar with this giant in the publishing industry.
              They began as a retailer and are now rapidly moving into every stage of the publishing process.
              Learn about them, be familiar, and get involved
              . It’s the largest market for book retailing
            </p>
          </div>
          <div className='features'>
            <h3>Features And Benefits </h3>
            <p>
              If you use Amazon a lot, the fact that Prime gives you free one- and two-day shipping is a pretty good deal
              in and of itself. There are other benefits, but the shipping thing is what people really care about. And,
              since all of your payment and shipping information is already stored with Amazon,
              you just click a button and stuff shows up at your door.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Providers
