import { get } from '../../service/apiClient'
import { useState, useEffect } from 'react'
import Card from '../card'
import CohortTitleCard from '../CohortTitleCard'
import StudentCard from '../studentCard'
import './style.css'
import TeacherCard from '../TeacherCard'

const CohortStudent = () => {

    const [cohortInfo, setCohortInfo] = useState(null)
    const [cohortStudents, setCohortStudents] = useState([])
    const [teachers, setTeachers] = useState([])


    useEffect(() => {
        const getCohortInfo = async () => {
            const res = await get(`cohorts/1`)
            setCohortInfo(res.data.cohort)
        }
        getCohortInfo()

        const getCohortMembers = async () => {
            const res = await get(`users`)
            const students = res.data.users.filter((user)=> user.role==='STUDENT')
            const teachers = res.data.users.filter((user)=> user.role==='TEACHER')
            setCohortStudents(students)
            setTeachers(teachers)
        }
        getCohortMembers()

    }, [])

    return (
        <>
            <main>
                <Card >
                    <h3 className="text-blue border-bottom"> My cohort </h3>
                    {cohortInfo && <CohortTitleCard info={cohortInfo}/>}
                    <ul className='studentList'>
                        {cohortStudents.map((person, index) => {
                            return <StudentCard key={index} person={person} />
                        })}
                    </ul>
                </Card>
            </main>

            <aside>
                <Card >
                    <h3 className='border-bottom'>Teacher</h3>
                    <ul>
                        {teachers.map((person, index) => {
                            return <TeacherCard key={index} person={person} />
                        })}
                    </ul>
                </Card>

                <Card>
                    <div className='exercises'>
                        <h3>My Exercises</h3>
                        <p className='text-blue1'> Modules: 2/7 completed </p>
                        <p className='text-blue1'> Units: 4/10 completed </p>
                        <p className='text-blue1'> Exercises: 34/58 completed </p>
                    </div>
                </Card>
            </aside>
        </>
    )
}

export default CohortStudent