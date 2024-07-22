import React, { ReactNode, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

export interface TelegramUser {
	id: number;
	first_name: string;
	last_name?: string;
	username?: string;
	photo_url?: string;
	auth_date: number;
	hash: string;
}

interface TelegramLoginButtonProps {
	botName: string;
	dataOnauth?: (user: TelegramUser) => void;
	buttonSize?: 'large' | 'medium' | 'small';
	cornerRadius?: number;
	requestAccess?: string;
	usePic?: boolean;
	lang?: string;
	widgetVersion?: number;
	className?: string;
	children?: ReactNode;
	dataAuthUrl?: string;
}

declare global {
	interface Window {
		TelegramLoginWidget: {
			dataOnauth: (user: TelegramUser) => void;
		};
	}
}

const TelegramLoginButton: React.FC<TelegramLoginButtonProps> = ({
	botName,
	buttonSize = 'large',
	cornerRadius,
	requestAccess = 'write',
	usePic = true,
	dataOnauth = () => undefined,
	dataAuthUrl,
	lang = 'en',
	widgetVersion = 9,
	className,
	children,
}) => {
	const instance = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		window.TelegramLoginWidget = {
			dataOnauth: (user: TelegramUser) => dataOnauth(user),
		};

		const script = document.createElement('script');
		script.src =
			'https://telegram.org/js/telegram-widget.js?' + widgetVersion;
		script.setAttribute('data-telegram-login', botName);
		script.setAttribute('data-size', buttonSize);
		if (cornerRadius !== undefined) {
			script.setAttribute('data-radius', cornerRadius.toString());
		}
		script.setAttribute('data-request-access', requestAccess);
		script.setAttribute('data-userpic', usePic.toString());
		script.setAttribute('data-lang', lang);
		if (dataAuthUrl !== undefined) {
			script.setAttribute('data-auth-url', dataAuthUrl);
		} else {
			script.setAttribute(
				'data-onauth',
				'TelegramLoginWidget.dataOnauth(user)',
			);
		}
		script.async = true;
		if (instance.current) {
			instance.current.appendChild(script);
		}
	}, [
		botName,
		buttonSize,
		cornerRadius,
		requestAccess,
		usePic,
		dataOnauth,
		dataAuthUrl,
		lang,
		widgetVersion,
	]);

	return (
		<div className={className} ref={instance}>
			{children}
		</div>
	);
};

TelegramLoginButton.propTypes = {
	botName: PropTypes.string.isRequired,
	dataOnauth: PropTypes.func,
	buttonSize: PropTypes.oneOf(['large', 'medium', 'small']),
	cornerRadius: PropTypes.number,
	requestAccess: PropTypes.string,
	usePic: PropTypes.bool,
	lang: PropTypes.string,
	widgetVersion: PropTypes.number,
	className: PropTypes.string,
	children: PropTypes.node,
	dataAuthUrl: PropTypes.string,
};

export default TelegramLoginButton;
