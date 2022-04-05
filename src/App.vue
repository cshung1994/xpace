<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="./assets/logo.png" alt="" width="24" height="24" class="d-inline-block align-text-top">
				Xpace
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<div class="d-flex justify-content-end">
					<ul class="navbar-nav px-3">
						<li class="nav-item">
							<router-link class="nav-link" to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/xcity">XCity</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/xpet">XPet</router-link>
						</li>
					</ul>
					<form class="d-flex">
						<input class="form-control me-2" type="email" placeholder="Email" aria-label="email">
						<button class="btn btn-outline-success" type="submit">Follow</button>
					</form>
				</div>
			</div>
		</div>
	</nav>
	<br>
	<div style="background: linear-gradient(180deg, #020915 0%, #340068 100%);">
		<div class="text-white">
			<router-view></router-view>
		</div>
	</div>

</template>