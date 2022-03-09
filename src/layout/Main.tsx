import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Main = (props: IMainProps) => (
	<div className="antialiased w-full">
		{props.meta}
		<Header />
		<div className="px-3 md:px-0 mainContent bg-gray-253 pt-3 md:pt-8">
			{props.children}
		</div>
		<Footer />
	</div>
);

export { Main };
