import React, { useEffect, useState } from 'react';
import SectionTittle from '../Shared/SectionTittle';
import InstructorCard from '../Shared/InstructorCard';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className='my-20'>
            <SectionTittle heading={'Trainers'} subHeading={'Trainer We Have'}></SectionTittle>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    instructors.map(instructor => <InstructorCard key={instructor.id} instructor={instructor}></InstructorCard>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;