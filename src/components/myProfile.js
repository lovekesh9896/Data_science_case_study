import React, { useState } from 'react';
import './profile.css';

export default function MyProfile(prop) {
	let [whatsappClass, setWhatsappClass] = useState('social-image');
	let [whatsappText, setWhatsappText] = useState('social-contact');

	let [mainClass, setmainClass] = useState('social-image');
	let [mainText, setmainText] = useState('social-contact');

	let [instaClass, setinstaClass] = useState('social-image');
	let [instaText, setinstaText] = useState('social-contact');

	function handleOnClickWhatsapp() {
		if (whatsappClass.includes('go-left-class')) {
			setWhatsappClass(whatsappClass.substring(0, 12));
			setWhatsappText('social-contact');
		} else {
			setWhatsappClass('social-image go-left-class');
			setWhatsappText('social-contact go-right-class');
		}
	}

	function handleOnClickMail() {
		if (mainClass.includes('go-left-class')) {
			setmainClass(mainClass.substring(0, 12));
			setmainText('social-contact');
		} else {
			setmainClass('social-image go-left-class');
			setmainText('social-contact go-right-class');
		}
	}

	function handleOnClickInsta() {
		if (instaClass.includes('go-left-class')) {
			setinstaClass(instaClass.substring(0, 12));
			setinstaText('social-contact');
		} else {
			setinstaClass('social-image go-left-class');
			setinstaText('social-contact go-right-class');
		}
	}

	function closeThemodel() {
		prop.setShowProfile(!prop.showProfile);
	}

	return (
		<div>
			<div className='main-profile-div' onClick={closeThemodel}></div>
			<div id='contact-developer'>
				<h2 style={{ textAlign: 'center', color: '#4d7da5' }}>Contact Me</h2>
				<div className='social' onClick={handleOnClickWhatsapp}>
					<img
						src='/images/whatsapp.png'
						alt=''
						className={whatsappClass.split()}
					/>
					<a
						href='https://wa.me/919588169756'
						target='_blank'
						rel='noreferrer'
						className={whatsappText.split()}
						style={{ color: 'greenyellow' }}
					>
						9588169756
					</a>
				</div>
				<div className='social' onClick={handleOnClickMail}>
					<img src='/images/mail.png' alt='' className={mainClass.split()} />
					<a
						href='mailto:?Kumarmehlan@gmail.com'
						target='_blank'
						rel='noreferrer'
						className={mainText.split()}
						style={{ color: 'rgb(255, 87, 87)' }}
					>
						{' '}
						Kumarmehlan
					</a>
				</div>
				<div className='social' onClick={handleOnClickInsta}>
					<img
						src='/images/instagram.png'
						alt=''
						className={instaClass.split()}
					/>
					<a
						href='https://www.instagram.com/lovekesh100/'
						target='_blank'
						rel='noreferrer'
						className={instaText.split()}
						style={{ color: 'blueviolet' }}
					>
						lovekesh100
					</a>
				</div>
			</div>
		</div>
	);
}
