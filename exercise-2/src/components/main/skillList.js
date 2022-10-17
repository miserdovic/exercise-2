import {Link} from 'react-router-dom'

export const SkillList = ({skills}) => {
    
    return (
        <div>
            {
            skills ?
            <div className='user-skills'>
                <ul>
                    {
                    skills.map((item, index) => {
                    return (
                        <Link 
                        to={`/skills/${item}`}
                        key={`${item} ${index}`}
                        style={{listStyle:'outside'}}><p>{item}</p></Link>
                        )
                    })}
                </ul>
            </div>
            : <></>
            }
        </div>
    )
}