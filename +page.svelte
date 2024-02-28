<script>
	let firstname = '';
	let lastname = '';
	let address = '';
	let pincode = '';
	let state = '';
	let country = '';
	let contact = '';
	let username = '';
	let password = '';
	let repassword = '';

	const handleSubmit = () => {
		if (
			!firstname ||
			!lastname ||
			!address ||
			!pincode ||
			!state ||
			!country ||
			!contact ||
			!username ||
			!password ||
			!repassword
		) {
			alert('Please fill in all the details');
			return;
		}

		fetch('http://localhost:3000/signup', {
			method: 'POST',
			headers : {
					'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				firstname: firstname,
				lastname: lastname,
				address: address,
				pincode: pincode,
				state: state,
				country: country,
				contact: contact,
				username: username
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});

		if (password != repassword) {
			alert('Your password is not matching');
			return;
		}

		console.log({
			firstname,
			lastname,
			address,
			pincode,
			state,
			country,
			contact,
			username,
			password,
			repassword
		});
		alert('Signed up Successfully!');
	};
</script>

<div class="row">
	<h1 class="text-center">Signup</h1>
</div>
<form on:submit|preventDefault={handleSubmit} class="container" method="post">
	<div class="row">
		<div class="col-md-6">
			<div class="mb-3">
				<label for="firstname" class="form-label">First Name</label>
				<input
					type="text"
					bind:value={firstname}
					class="form-control"
					placeholder="Enter your First Name"
				/>
			</div>
			<div class="mb-3">
				<label for="lastname" class="form-label">Last Name</label>
				<input
					type="text"
					bind:value={lastname}
					class="form-control"
					placeholder="Enter your Last Name"
				/>
			</div>
			<div class="mb-3">
				<label for="address" class="form-label">Address</label>
				<input
					type="text"
					bind:value={address}
					class="form-control"
					placeholder="Enter full address"
				/>
			</div>
			<div class="mb-3">
				<label for="pincode" class="form-label">Pincode</label>
				<input
					type="numeric"
					bind:value={pincode}
					class="form-control"
					placeholder="Enter 6 digit pincode"
				/>
			</div>
			<div class="mb-3">
				<label for="state" class="form-label">State</label>
				<input type="text" bind:value={state} class="form-control" />
			</div>
			<div class="mb-3">
				<label for="country" class="form-label">Country</label>
				<input type="text" bind:value={country} class="form-control" />
			</div>
			<div class="mb-3">
				<label for="contact" class="form-label">Contact</label>
				<input type="text" bind:value={contact} class="form-control" />
			</div>
			<div class="mb-3">
				<label for="username" class="form-label">Username</label>
				<input type="text" bind:value={username} class="form-control" />
			</div>
			<div class="mb-3">
				<label for="password" class="form-label">Password</label>
				<input
					type="password"
					bind:value={password}
					class="form-control"
					placeholder="Enter your Password"
				/>
			</div>
			<div class="mb-3">
				<label for="repassword" class="form-label">Confirm Password</label>
				<input
					type="text"
					bind:value={repassword}
					class="form-control"
					placeholder="Re-Enter your Password"
				/>
			</div>
		</div>
	</div>
	<div class="col-12">
		<button class="btn btn-primary" type="submit">Submit form</button>
	</div>
</form>

<!--
<Row>
	<Col>
		<Button color="primary" outline>Hello World!</Button>
	</Col>
</Row> 

<form method="POST">
	<label>
		Name
		<input name="name" type="name" />
	</label>
	<p></p>
	<label>
		Date of Birth
		<input name="dob" type="dob" />
	</label>
	<p></p>
	<label>
		Address
		<input name="address" type="address" />
	</label>
	<p></p>
	<label>
		City
		<input name="city" type="city" />
	</label>
	<p></p>
	<label>
		State
		<input name="state" type="state" />
	</label>
	<p></p>
	<label>
		Pincode
		<input name="pincode" type="pincode" />
	</label>
	<p></p>
	<label>
		Username
		<input name="username" type="username" />
	</label>
	<p></p>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<p></p>
	<label>
		Retype Password
		<input name="retypepassword" type="retypepassword" />
	</label>
	<p></p>
	<label>
		<input type="checkbox" bind:checked={agreetoterms} />
		Yes I agree to the terms and conditions.
	</label>
	<br />
	<button type="submit">Submit</button>
</form>
-->