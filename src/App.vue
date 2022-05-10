<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
		<div class="container-fluid">
			<a class="d-inline-flex align-items-center navbar-brand" href="#">
				<img src="./assets/logo.png" alt="" width="40" height="40" class="d-inline-block align-text-top me-2">
				<strong>XPACE</strong>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<div class="d-flex justify-content-end">
					<ul class="d-flex align-items-center navbar-nav px-3">
						<li class="nav-item">
							<router-link class="nav-link" to="/">Home</router-link>
						</li>
						<li class="nav-item ms-2">
							<router-link class="nav-link" to="/xcity">BBS X-city</router-link>
						</li>
						<li class="nav-item ms-2">
							<router-link class="nav-link" to="/xpet">X-pet</router-link>
						</li>
						<li class="nav-item ms-2">
							<router-link class="nav-link" to="/xpadao">XPA DAO</router-link>
						</li>
						<li class="nav-item ms-4">
							<img src="./assets/follow_us.png" alt="" class="mt-1" style="height: 3rem;">
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

	<div class="position-fixed end-0 d-flex align-items-center" style="height: 100vh; zIndex: 100;">
		<div class="d-flex flex-column gx-2 pe-2">
			<div class="float-link">
				<font-awesome-icon :icon="['fas', 'share-nodes']" />
			</div>
			<!-- <div class="float-link">
				<font-awesome-icon :icon="['fab', 'discord']" />
			</div> -->
			<div class="float-link">
				<font-awesome-icon :icon="['fas', 'envelope']" />
			</div>
			<!-- <div class="float-link">
				<font-awesome-icon :icon="['fab', 'twitter']" />
			</div> -->
			<div class="float-link">
				<font-awesome-icon :icon="['fas', 'paper-plane']" />
			</div>
		</div>
	</div>

	<div class="position-relative bg-black">
		<div class="container text-white" style="paddingTop: 5rem;">
			<router-view></router-view>
		</div>
	</div>

	<div class="text-white" style="marginTop: 6rem;">
        <img class="position-absolute w-100" src="./assets/Home/followus.png">
        <div class="position-absolute w-100 mx-3 my-3 text-center">
            <h1 class="fw-bold mt-4">Join the future community</h1>
            <h1 class="fw-bold">to meet many fun and smart people</h1>
			<div class="d-flex p-4 justify-content-center">
				<!--
				<form class="d-flex">
					<input class="form-control primary-input me-4" type="email" placeholder="Enter Your E-mail Address" aria-label="email">
					<button class="btn follow-btn fs-4 fw-bold" type="submit">Follow Us</button>
				</form>
				-->
				<a
					href=""
					class="btn follow-btn fs-4 fw-bold"
					target="_blank"
					ref="noreferrer"
				>
					Follow Us
				</a>
			</div>
			<h1 class="mt-3 fw-light">Get notified about important XPACE updates.</h1>
        </div>
    </div>

</template>