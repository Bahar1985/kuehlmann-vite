export const PageKontakt = () => {
	return /*html*/`
<div class="page pageKontakt">
<section class="location">

<iframe
	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.9220324205394!2d8.36649517712122!3d49.012068271353336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479706e599ff9f49%3A0xb17b31214da47471!2sH%C3%A4ndelstra%C3%9Fe%2019%2C%2076185%20Karlsruhe!5e0!3m2!1sen!2sde!4v1689770811797!5m2!1sen!2sde"
	width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
	referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

<section class="contact-us">

<div class="row">
	<div class="contact-col">
		<div>
			<i class="fa fa-home"></i>
			<span>
				<h5> Lutz Kühlmann</h5>
				<p> Händestraße,19 UG<br>D-76185,Karlsruhe</p>
			</span>
		</div>
		<div>
			<i class="fa fa-phone"></i>
			<span>
				<h5> Tel. +49176......</h5>
				<p>Montag bis Frietag <br> von 09 bis 17:00 Uhr </p>
			</span>
		</div>
		<div>
			<i class="fa fa-fax"></i>
			<span>
				<h5>Fax. 0721 / 8 24 81 82 – 0</h5>
				<p> </p>
			</span>
		</div>
		<div>
			<i class="fa fa-envelope"></i>
			<span>
				<h5> info@kuehlmann-projektleitung.de</h5>
				<p></p>
			</span>
		</div>
	</div>
	<div class="contact-col">
		<form action="">
			<input type="text" placeholder="Enter your name " required>
			<input type="email" placeholder="Enter Email address " required>
			<input type="text" placeholder="Enter your subject " required>
			<textarea rows="10" placeholder="Nachricht" required></textarea>
			<button type="submit" class="hero-btn red-btn"> send massage</button>
		</form>

	</div>
</div>

</section>
</div>
`; 
}