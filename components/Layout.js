import React from "react";
import Head from "next/head";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import "../node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {
	const head = () => (
		<>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			></link>
		</>
	);
	const nav = () => (
		<ul className="nav bg-warning px-3">
			<li className="nav-item">
				<Link href="/">
					<a className="nav-link text-dark">Home</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/login">
					<a className="nav-link text-dark">Login</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/register">
					<a className="nav-link text-dark">Register</a>
				</Link>
			</li>
		</ul>
	);
	return (
		<>
			{head()}

			{nav()}

			<div className="container pt-5 pb-5">{children}</div>
		</>
	);
};

export default Layout;
