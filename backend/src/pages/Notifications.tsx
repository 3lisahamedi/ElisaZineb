import React, { useState } from 'react'
import * as BookCarsTypes from ':BookCars-types'
import Layout from '../components/Layout'
import NotificationList from '../components/NotificationList'

const Notifications = () => {
  const [user, setUser] = useState<BookCarsTypes.User>()

  const onLoad = async (_user?: BookCarsTypes.User) => {
    setUser(_user)
  }

  return (
    <Layout onLoad={onLoad} strict>
      <NotificationList user={user} />
    </Layout>
  )
}

export default Notifications
