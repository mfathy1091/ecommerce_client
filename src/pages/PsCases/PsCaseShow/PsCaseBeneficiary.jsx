// import './PsCaseBeneficiary.css';
import { NavLink, Routes, Route, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const PsCaseBeneficiary = () => {
	const axiosPrivate = useAxiosPrivate();
	let { psIntakeId, beneficiaryId } = useParams();
	//console.log(beneficiaryId)
	const [beneficiary, setBeneficiary] = useState({});
	const [services, setServices] = useState({});
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		console.log(beneficiaryId)
		getBeneficiary()
		
	}, [psIntakeId, beneficiaryId])

	const getBeneficiary = async () => {
		setLoading(true)
		const res = await axiosPrivate.get(`/beneficiaries/${beneficiaryId}`);
		setBeneficiary(res.data)
		setLoading(false)

	}

	const getServices = async () => {
		setLoading(true)
		const res = await axiosPrivate.get(`/services?beneficiaryId=${beneficiaryId}&psIntakeId=${psIntakeId}`);
		setServices(res.data)
		setLoading(false)

	}

	return (
		<div className='relative pt-6'>
			<div className='absolute top-4 right-0'>
				<TooltipComponent content="Actions" position="Top">
					<button
						type='button'
						onClick={() => {}}
						style={{ borderRadius: '50%' }}
						className='text-2xl p-3 hover:drop-shadow-sm text-gray-500 
						hover:bg-neutral-50 dark:bg-transparent dark:hover:bg-black dark:hover:bg-opacity-10'
					>
						<BsThreeDots />
					</button>
				</TooltipComponent>
			</div>

				<div className='header'>
					<div className='right-section'>
						<p className='beneficiary-name'>
							{beneficiary.name} - <NavLink to={`/beneficiaries/${beneficiaryId}`}> go to profile</NavLink>
						</p>
						<p className='beneficiary-un-number'>
							{beneficiary.file_id}
						</p>
					</div>
					<div className='left-section'>
						<h5>hello right</h5>
					</div>
				</div>
				<hr /><br />

				<div>
					<h1 className='text-xl'>Provided Services</h1>
					<h5 className='text-lg'>PSS</h5>
					<ul>
						<li>- hi</li>
					</ul>
					<h5 className='text-lg'>Housing</h5>
				</div>
			</div>
	)
}

export default PsCaseBeneficiary