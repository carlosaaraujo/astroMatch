import React, { useEffect, useState } from "react";
import axios from "axios";

import { baseURL } from "../.././constants/index";
import Loading from "../Loading/Loading";
import { ContainerMatches } from "./Style";
import { toast } from "react-toastify";

export function ListMatch() {
	const [profilesMatch, setProfilesMatch] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getMatches();
	}, [profilesMatch]);

	const getMatches = () => {
		axios
			.get(`${baseURL}/jose-carlos/matches`)
			.then((request) => {
				setProfilesMatch(request.data.matches);
				return setLoading(true);
			})
			.catch((erro) => {
				return toast.error(erro);
			});
	};

	const profilesFilter = profilesMatch.map((profile) => {
		return (
			<ul key={profile.id}>
				<li>
					<img src={profile.photo} alt="" />

					<p>{profile.name}</p>
				</li>
			</ul>
		);
	});

	return (
		<ContainerMatches>
			{loading ? profilesFilter : <Loading />}
		</ContainerMatches>
	);
}
