import React, { Component } from "react"
import { Link } from "react-router-dom"
import Searchbar from "../searchbar/index"
import ImageIndex from "../image/index"
import styles from "../css/navbar.module.css"

class Navbar extends Component {
	render() {
		return (
			<div className={styles.navbar}>
				<div className={styles.title}>DELTA</div>
				<Searchbar />
				<div className={styles.subnavbar}>
					<ul>
						<li>
							<Link to="/" className={styles.profile}>
								Profile
							</Link>
						</li>
						<li>
							<Link to="/" className={styles.opportunities}>
								Opportunities
							</Link>
						</li>{" "}
						<li>
							<Link to="/" className={styles.createpost}>
								Create Post
							</Link>
						</li>{" "}
						<li>
							<Link to="/" className={styles.notification}>
								Notification
							</Link>
						</li>{" "}
						<li>
							<Link to="/" className={styles.more}>
								More
							</Link>
						</li>
					</ul>
					<ImageIndex
						image="asdfgh"
						size="zcvbn"
						shape="circular"
						className={styles.profilepic}
					/>
				</div>
			</div>
		)
	}
}

export default Navbar
