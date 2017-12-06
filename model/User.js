
let user = mongoose.model('User', {
	time: {
		type: Number,
		required: true

	}, cookie: {
		type: String,
		required: true,
		trim: true,
		minlenght: 1

	}, completedAt: {

		type: Number

	}

});

module.exports = {
	user
}