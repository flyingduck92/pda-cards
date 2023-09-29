import 'bulma/css/bulma.css'
import './App.css'
import ProfileCard from './ProfileCard'

import alexaImg from './images/alexa.png'
import cortanaImg from './images/cortana.png'
import siriImg from './images/siri.png'

function App() {
  return (
    <>
      <div className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Assistants</p>
        </div>
      </div>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                img={alexaImg}
                title='Alexa'
                handle='@alex99'
                description='Alexa was created by Amazon and helps you buy things'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                img={cortanaImg}
                title='Cortana'
                handle='@john121'
                description='Cortana was created by Microsoft and helps you search things'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                img={siriImg}
                title='Siri'
                handle='@jules88'
                description='Siri was created by Apple and helps you to do several things with voice'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
