const getAllUsers = (req, res) => {
	try {
		res.status(200).json({
			data: [],
			success: true
		})
	}
	catch(error) {
		res.status(404).json({
			message: error.error,
			success: false
		})
	}
};

const addOneUsers = (req, res) => {
	try {
		res.status(200).json({
			data: [],
			success: true
		})
	}
	catch(error) {
		res.status(404).json({
			message: error.error,
			success: false
		})
	}
};

const getOneUser = (req, res) => {
	try {

		res.status(200).json({
			data: {},
			success: true
		})
	}
	catch(error) {
		res.status(404).json({
			message: error.error,
			success: false
		})
	}
};

const deleteUser = (req, res) => {
	try {

		res.status(204).json({
			data: {},
			success: true
		})
	}
	catch(error) {
		res.status(404).json({
			message: error.error,
			success: false
		})
	}
};

const updateUser = (req, res) => {
	try {

		res.status(204).json({
			data: {},
			success: true
		})
	}
	catch(error) {
		res.status(404).json({
			message: error.error,
			success: false
		})
	}
};

module.exports = {
	getAllUsers,
	getOneUser,
	deleteUser,
	updateUser,
	addOneUsers
};