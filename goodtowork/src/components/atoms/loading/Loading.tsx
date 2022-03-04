import './Loading.css'

const Loading = () => {
  return (
    <div className='ProjectDetailPanel-loading'>
      <div className='ProjectDetailPanel-loading-center'>
        <div className='lds-ripple'><div></div><div></div></div>
      </div>
    </div>
  )
}

export default Loading