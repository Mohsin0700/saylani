import './Homepage.css'
import pic from '../../Assets/bg.png'
import NavBar from '../../Components/Navigation/Navbar'
import { db } from '../../Config/FirebaseConfig'
import Cardx from './Card'
import { Container, Row } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'
import { useContext } from 'react'
import AppContext from 'antd/es/app/context'



const Homepage = () => {
  const [myFinalData, setMyFinalData] = useState([])

  const getdata = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const mydata = []
    setMyFinalData(mydata)
    querySnapshot.forEach((doc) => {
      mydata.push(doc.data());
    });
  }
  getdata();

  return (
    <div className='Homepage'>
      <NavBar />
      <img src={pic} alt="" width={1364} className='bg' />
      <h1>Search by Categories</h1>
      <Container>
        <Row>
          {
            // cards.map((data) => {
            //   return <Cardx data={data} />
            // })
            myFinalData.map((data) => {
              return <Cardx data={data} />
            })
          }
        </Row>
      </Container>

    </div>
  )
}

export default Homepage