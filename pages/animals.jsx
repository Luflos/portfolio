import axios from "axios"

// when we get data from the server, it is available as props
export default function Animals({ data, otherProp }) {
  return (
    <h1>Random Animal: {data.rando}</h1>
  )
}

// export a function thats called 'getStaticProps'
// whatever is returned from this function
// becomes the 'data' prop in our componenets
export async function getStaticProps() {
  // we can do all of our ajax/axios/fetch here
  // we can call external APIs, express, backends, or next backend
  const { data } = await axios.get(`${process.env.SERVER_URL}/api/animals`)
  console.log(data)

  return {
    // these props are available to us in the componenet
    props: {
      data,
      otherProp: 'hi'
    }
  }
}