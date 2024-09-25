import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Container } from '../components/Container'

const ProductPage = () => {
  return (
    <section>
        <Container>
            <Breadcrumb currentPageTitle={"Product Module"} links={["Home", "Product Module"]} />
        </Container>
    </section>
  )
}

export default ProductPage