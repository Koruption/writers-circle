import { Mocking } from './../../mock'

export async function getServerSideProps() {
  return {
    props: {
      circles: JSON.stringify(Mocking.data)
    }
  }
}

export default function Home({ circles }: any) {
  return <>
    hello
    { circles }
  </>
}