import Spinner from "./Spinner"
const LoadingComponent = () => {
  return (
    <div>
      <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0 bottom-0 flex justify-center items-center'>
        <Spinner></Spinner>
      </div>
    </div>
  )
}

export default LoadingComponent