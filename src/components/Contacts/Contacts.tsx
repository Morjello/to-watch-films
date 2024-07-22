import { useState } from 'react';

import TelegramLoginButton, {
	TelegramUser,
} from '../TelegramWidget/TelegramWidget';

const Contacts = () => {
	const [user, setUser] = useState<TelegramUser | null>(null);

	const handleTelegramAuth = (user: TelegramUser) => {
		console.log('User authenticated via Telegram:', user);
		setUser(user);
		// You can now send the user data to your backend for further processing
	};

	return (
		<TelegramLoginButton
			botName="your_bot_name" // Replace with your bot's username
			dataOnauth={handleTelegramAuth}
			buttonSize="large"
			cornerRadius={10}
			requestAccess="write"
			usePic={true}
			lang="en"
			widgetVersion={9}
		/>
	);
};

export default Contacts;
