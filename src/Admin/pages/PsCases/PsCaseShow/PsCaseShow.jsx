import PsCaseBeneficiary from './PsCaseBeneficiary'
import { NavLink, Routes, Route, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from '../../../components';
import { useMainContext } from '../../../contexts/MainProvider';
import Navbar from './Navbar';
import Container from '../../../components/Container/Container';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';


const tabsData = [
  {
    label: "This Text",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    label: "That Text",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];




const PsCaseShow = () => {
	const axiosPrivate = useAxiosPrivate();
	const { psCaseId } = useParams();
	const [psCase, setPsCase] = useState({});
	const [isLoading, setLoading] = useState(false);
  const { currentColor } = useMainContext();
	
	useEffect(() => {
		getpsCase()
	}, [])

	const getpsCase = async () => {
		setLoading(true)
		axiosPrivate.get(`/ps-cases/${psCaseId}/details`)
			.then(response => setPsCase(response.data))
			.then(() => {
				setLoading(false)
				// manipulateData()
			})


	}
	let data2 = [
		
	]

	let manipulateData =  () => {
		const beneficiaries =  psCase?.beneficiaries
		console.log(beneficiaries)

		data2 = beneficiaries.map((beneficiary) => ({
			label: beneficiary.full_name,
			content: beneficiary
		}))
		console.log(data2)
	}


	return (
		<div>
			<Header category="Page" title="PS Case" />
				
			<Container>
				<div className='flex space-x-5'>
					<div>
						<p className='text-gray-400'>Referral Source</p>
						<p className='font-bold tracking-tigh'>{ psCase.referral_source }</p>
					</div>
					<div>
						<p className='text-gray-400'>Referral Date</p>
						<p className='font-bold tracking-tight'>{ psCase.referral_date }</p>
					</div>
				</div>
			</Container>
			<div className='card-header flex justify-between ml-4 mt-8 mb-5'>
				<p className='text-xl tracking-tight text-slate-900 dark:text-neutral-200'>
					Beneficiaries
				</p>
			</div>
			<Container>


				
				{!isLoading && (
					<Navbar 
						beneficiaries = {psCase.beneficiaries}
						psCaseId = {psCaseId}
					/>
				)}


				<Routes>
					<Route path="beneficiaries/:beneficiaryId" element={<PsCaseBeneficiary/>} />
				</Routes>

			</Container>
		</div>
		
	)
}

export default PsCaseShow