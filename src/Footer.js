import React from 'react';

function Footer() {
    return (
   	<footer>
   		<div className="footer-upper-bar"></div>
		<div className="container-fluid footer bg-light">
			<div className="row align-items-center h-100 py-3">
				<div className="hide-on-sm col-12 col-md-6 px-0">
				    <a className="site-map-item" href="#">About</a>
				    <a className="site-map-item" href="#">Our Impact</a>
				    <a className="site-map-item" href="#">Events</a>
				    <a className="site-map-item" href="#">Organizers</a>
				    <a className="site-map-item" href="#">Mentors</a>
				    <a className="site-map-item" href="#">Curriculums</a>
			    </div>
			    <div className="text-center col-12 col-md-6 px-0">
			    	<div className="footer-social-icon float-md-right">
			    		<a href="mailto:scalabridge@gmail.com">
			    			<i className="fa fa-envelope" aria-hidden="true"/>
			    		</a>
			    	</div>
			    	<div className="footer-social-icon float-md-right">
			    		<a href="https://twitter.com/scalabridge">
			    			<i className="fa fa-twitter" aria-hidden="true"/>
			    		</a>
			    	</div>
			    	<div className="footer-social-icon float-md-right">
			    		<a href="https://github.com/scalabridge">
			    			<i className="fa fa-github" aria-hidden="true"/>
			    		</a>
			    	</div>
			    </div>
			    <div className="col-6 col-md-12 px-0">
				    <a className="site-map-item" href="#">Terms &amp; Conditions</a>
				    <a className="site-map-item hide-on-sm" href="#">Privacy Policy</a>
			    </div>
			    <div className="text-center col-6 col-md-2 px-0 show-on-sm"> 
			    	<a className="site-map-item" href="#">Privacy Policy</a>
			    </div>
			    <div className="text-center col-12 px-0"> 
			    	<a className="site-map-item" href="#">&copy; 2019 ScalaBridge</a>
			    </div>
		  	</div>
		</div>
  	</footer>);
}

export default Footer;