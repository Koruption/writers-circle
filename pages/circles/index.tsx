import { Mocking } from './../../mock'
import { Types } from '../../lib/types';
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const data = Mocking.data
  if (!data) {
    return {
      props: data
    }
  }
  return {
    // props: Mocking.data
    redirect: {
      destination: `circles/${data.circles[0].id}`,
      permanent: false
    }
  }
}

export default function Home({ circles }: { circles: Types.Circle[] }) {
  useRouter().push(`circles/${circles[0].id}`)

  return null
}