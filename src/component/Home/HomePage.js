import videoHomePage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted width="800px" height="800px" >
                <source src={videoHomePage}
                    type='video/mp4' />

            </video>
            <div className='homepage-content'>
                <div className='homepage-content--title1'>There's a better way to ask</div>
                <div className='homepage-content--title2'>you don't want to make boring form .
                    And your audience won't answer one,
                    Create a typeform instead-and make everyone happy</div>
                <div className='homepage-content--title3'>
                    <button >Get's Started. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;