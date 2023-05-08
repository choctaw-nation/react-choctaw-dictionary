import { Modal } from '../Components/Modal';
const showModal = false;

export function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			{showModal && <Modal />}
			<p className="copyright">&copy;&nbsp;{year} Choctaw Nation of Oklahoma</p>
		</footer>
	);
}
