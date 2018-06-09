let objectPeople = [
{
	username: "saeed",
	password: "12345"

},
{
	username: "junaid",
	password: "67890"
},
{
	username: "talha",
	password: "09876"
}

]


function getInfo() {



	let username = document.getElementById("username").value
	let password = document.getElementById("password").value

	for ( i = 0; i < objectPeople.length; i++) {
		if (username == objectPeople[i].username && password == objectPeople[i].password) {
			// console.log("SUCCESS!!! LoggedIn "+ username )
		alert("SUCCESS!!! Loggedin "+ username)
		return
		}

	}
			
		alert("incorrect password or username")
	}



