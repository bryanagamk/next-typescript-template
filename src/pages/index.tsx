import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Main } from "../layout/Main";
import { Meta } from "../layout/Meta";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<Main
			meta={
				<Meta title="Title Webpage" description="Description Webpage" />
			}
		>
			<div>
				<h1>Content</h1>
			</div>
		</Main>
	);
};

export default Home;
