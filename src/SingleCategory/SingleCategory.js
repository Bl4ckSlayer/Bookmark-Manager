import React from 'react';

const SingleCategory = (props) => {

	const { item } = props

	const showData = () => {

	}
	return (
		<div className='card mb-4 d-flex'>
			<h1>{item.title}</h1>
			<button onClick={() => showData()}>Details</button>
		</div>
	);
};

export default SingleCategory;