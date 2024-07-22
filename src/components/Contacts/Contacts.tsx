import { useState } from 'react';

import TelegramLoginButton, {
	TelegramUser,
} from '../TelegramWidget/TelegramWidget';
import styles from './ParentComponent.module.css';

const Contacts = () => {
	const [user, setUser] = useState<TelegramUser | null>(null);

	const handleTelegramAuth = (user: TelegramUser) => {
		console.log('User authenticated via Telegram:', user);
		setUser(user);
		// You can now send the user data to your backend for further processing
	};

	return (
		<div>
			<h1>Welcome to My App</h1>
			{user ? (
				<div className={styles.userContainer}>
					{user.photo_url && (
						<img
							src={user.photo_url}
							alt="User avatar"
							className={styles.userImage}
						/>
					)}
					<span className={styles.username}>{user.first_name}</span>
				</div>
			) : (
				<TelegramLoginButton
					botName="your_bot_name" // Replace with your bot's username
					dataOnauth={handleTelegramAuth}
					buttonSize="large"
					cornerRadius={10}
					requestAccess="write"
					usePic={true}
					lang="en"
					widgetVersion={9}
				>
					<button className={styles.telegramButton}>
						<img
							src="path/to/telegram-icon.png" // Replace with the path to your Telegram icon
							alt="Login with Telegram"
							className={styles.telegramIcon}
						/>
					</button>
				</TelegramLoginButton>
			)}
		</div>
	);
};

export default Contacts;
