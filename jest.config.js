module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	transformIgnorePatterns: ['/node_modules/(?!axios).+\\.js$'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // if you have any setup
};
