import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../api/axios';
import Container from '../../components/Container/Container';
import PageHeader from '../../components/PageHeader';
import { useMainContext } from '../../contexts/MainProvider';

const BeneficiaryProfile = () => {
	const { isIntakeOpened, setIsIntakeOpened} = useMainContext();

	let { beneficiaryId } = useParams();
	const [beneficiary, setBeneficiary] = useState({});

	useEffect(() => {
		getBeneficiary();
	}, [beneficiaryId])
	
	const getBeneficiary = async () => {
		const res = await api.get(`/beneficiaries/${beneficiaryId}`);
		setBeneficiary(res.data)
	}

	const AddToIntake = () => {
		if(!isIntakeOpened){
			setIsIntakeOpened(true);
		}
	}

	return (
		<div>
			<PageHeader category="beneficiaries" title="Beneficiary Profile" />
			<Container>
				<div className='card-header flex justify-between mb-5'>
          <p className='text-xl tracking-tight text-slate-900 dark:text-neutral-200'>
						{beneficiary.full_name}
          </p>

          <button 
            className='opacity-80 hover:opacity-100 bg-red-400 px-4 py-1.5 text-white rounded-md'
						onClick={AddToIntake}
          >
            Add To Intake
          </button>
        </div>



				<h2>{beneficiary.name} | {beneficiary.file_id}</h2>
				<hr />
				
				<div className="my-card">
					<h5>Details</h5>

					<p>Type: Refugee</p>
					<p>Passport Number: fg859985</p>
				</div>
				
				<div className="my-card">
					<h5>File Details</h5>
					<p>File Number: </p>
					<p>Individual Number: 565454426</p>
				</div>

				<div className="my-card">
					<h5>Provided Services (another tab)</h5>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Service Types</th>
								<th scope="col">Date</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>PSS</td>
								<td>10 July 2022</td>
								<td><span className="badge bg-primary">Active</span></td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Housing</td>
								<td>20 May 2022</td>
								<td><span className="badge bg-danger">Regicted</span></td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>PSS</td>
								<td>01 March 2022</td>
								<td><span className="badge bg-dark">Closed</span></td>
							</tr>

						</tbody>
					</table>
				</div>
			</Container>
		</div>
	)
}

export default BeneficiaryProfile