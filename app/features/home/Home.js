import React, { useContext, useEffect } from 'react'
import CarouselComponent from '../../../app/components/carousel/Carousel'
import PageContainer from '../../../app/components/layout/main-container/PageContainer'
import LastVisit from '../../../app/components/last-visit/LastVisit'
import Offers from '../../../app/components/offers/Offers'
import { AuthContext } from '../../../app/context/AuthProvider'
import ProtectRoute from '../../hoc/ProtectRoute'

export function HomeComponent(props) {
  const { user } = useContext(AuthContext)

  const checkAuthUser = () =>
    user ? (
      <>
        <LastVisit />
        <Offers />
      </>
    ) : (
      <>
        <Offers />
      </>
    )

  return (
    <>
      <CarouselComponent />
      <PageContainer>{checkAuthUser()}</PageContainer>
    </>
  )
}

export default ProtectRoute(HomeComponent)