import './App.css'
import FButton, { Border, Size } from './components/FButton'

function App() {
  function f() {
    console.log('click');
  }

  return (
    <>
      <main>
        <div className="box">
          <h1>Sizes</h1>
          <div className="buttons">
            <FButton text="Ciao" onClick={f} />
            <FButton text="Hello" size={Size.Small} />
            <FButton text="Hola" size={Size.Medium} />
            <FButton text="Priviet" size={Size.Large} />
          </div>
        </div>

        <div className="box">
          <h1>Borders</h1>
          <div className="buttons">
            <FButton text="Normal" />
            <FButton text="Squared" border={Border.Squared} />
            <FButton text="Rounded" border={Border.Rounded} />
          </div>
        </div>

        <div className="box">
          <h1>State</h1>
          <div className="buttons">
            <FButton text="Disabled" disabled />
            <FButton text="Loading" loading />
          </div>
        </div>

        <div className="box">
          <h1>Color States</h1>
          <div className="buttons">
            <FButton text="Normal" />
            <FButton text="Primary" state="primary" />
            <FButton text="Link" state="link" />
            <FButton text="Info" state="info" />
            <FButton text="Success" state="success" />
            <FButton text="Warning" state="warning" />
            <FButton text="Danger" state="danger" />
          </div>
        </div>

        <div className="box">
          <h1>Color outline States</h1>
          <div className="buttons">
            <FButton text="Normal" outlined />
            <FButton text="Primary" state="primary" outlined />
            <FButton text="Link" state="link" outlined />
            <FButton text="Info" state="info" outlined />
            <FButton text="Success" state="success" outlined />
            <FButton text="Warning" state="warning" outlined />
            <FButton text="Danger" state="danger" outlined />
          </div>
        </div>

        <div className="box">
          <h1>Icons</h1>
          <div className="buttons">
            <FButton text="Icon Left" icon="fa-solid fa-user" iconPosition="left" state="primary" />
            <FButton text="Icon Right" icon="fa-solid fa-location-dot" iconPosition="right" state="info" />
            <FButton icon="fa-solid fa-check" state="success" border={Border.Rounded} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
