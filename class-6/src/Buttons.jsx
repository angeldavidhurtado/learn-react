import Teacher from './Teacher'
import Address from './Address'
import './Buttons.css'

function Buttons() {
	return (
		<div className="buttons">
			<button>Profesora</button>
			<button>Lugar</button>
			<Teacher />
			{/* <Address /> */}
		</div>
	)
}

export default Buttons
