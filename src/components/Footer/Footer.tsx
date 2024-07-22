import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	const [isRender, setRender] = useState(false);
	console.log(isRender);

	return (
		<div>
			<button onClick={() => setRender}>Click me</button>
		</div>
	);
};

export default Footer;
