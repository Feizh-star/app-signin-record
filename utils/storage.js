

function setStorage(date, key, value) {
	uni.setStorage({
		key: date.getFullYear()
	})
}

function getStorage(year) {
	return new Promise((resolve, reject) => {
		uni.getStorage({
			key: year,
			success(data) {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
	
}

function getData() {
	
}