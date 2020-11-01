import HeadComponent from "../../app/components/head/HeadComponent";
import Layout from "../../app/components/layout/Layout";
import PageContainer from "../../app/components/layout/main-container/PageContainer";


export default function Checkout(){

  return (
    <>
    <HeadComponent></HeadComponent>
    <Layout>
      <section>
        <PageContainer>
          {/** here */}
        </PageContainer>
      </section>
    </Layout>
    </>
  )
}