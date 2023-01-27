import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { baseURL } from "../.././constants/index";

import BtnHeart from "../.././img/btn-heart.svg";
import BtnClose from "../.././img/btn-x.svg";
import HeartBrake from "../.././img/heart-break.svg";
import {
	ContainerButtons,
	ContainerListPeople,
	ImageProfile,
	LeftButton,
	ResetMatches,
	RightButton,
} from "./Style";
import Loading from "../Loading/Loading";

export function ListPeople() {
	const [matchProfile, setMatchProfile] = useState("");
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios
			.get(`${baseURL}/jose-carlos/person`)
			.then((request) => {
				setProfile(request.data.profile);
				return setLoading(true);
			})
			.catch((erro) => {
				return toast.error(erro);
			});
	}, [matchProfile]);

	const choosePerson = (id, button) => {
		const body = {
			id: id,
			choice: button,
		};

		axios
			.post(`${baseURL}/jose-carlos/choose-person`, body)
			.then((request) => {
				if (request.data.isMatch) {
					toast.success("Oba!! Vocês deram match!");
				}
				return setMatchProfile(request.data);
			})
			.catch((erro) => {
				return toast.error(erro);
			});
	};

	const profileMatch = () => {
		if (profile === null) {
			return (
				<ResetMatches>
					<img src={HeartBrake} alt={""} />
					<h1>Seus matches acabaram, tente resetar!</h1>
				</ResetMatches>
			);
		} else {
			return (
				<>
					<div className="card-box">
						<ImageProfile src={profile.photo} alt={profile.alt} />

						<div className="text-box">
							<h2>
								{profile.name}, {profile.age}
							</h2>

							<p>{profile.bio}</p>
						</div>
					</div>

					<ContainerButtons>
						<LeftButton
							onClick={() => choosePerson(profile.id, false)}
						>
							<img src={BtnClose} alt={""} />
						</LeftButton>

						<RightButton
							onClick={() => choosePerson(profile.id, true)}
						>
							<img src={BtnHeart} alt={""} />
						</RightButton>
					</ContainerButtons>
				</>
			);
		}
	};

	return (
		<ContainerListPeople>
			{loading ? profileMatch() : <Loading />}
		</ContainerListPeople>
	);
}
