import React from "react";

import BtnHeart from "../.././img/btn-heart.svg";
import { ContainerLoading, ImageHeart } from "./Style";

export default function Loading() {
	return (
		<ContainerLoading>
			<ImageHeart src={BtnHeart} alt={""} />
		</ContainerLoading>
	);
}
