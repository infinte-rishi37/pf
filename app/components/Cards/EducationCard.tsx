import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const EducationCard = ({details}:{details : any}) => {
  return (
    <main className='w-full h-auto p-6 bg-opacity-20 bg-slate-800'>
      <div className='flex items-center justify-between'>
        <div>
          <><SchoolTwoToneIcon/> {details.Institute}</> <br />
          <><LocationOnIcon/> {details.Location}</> <br /> <br />
          {details.Degree.toUpperCase()}
        </div>
        <div>
          <>{details.startsFrom} to {details.endsOn}</> <br />
          <br /><br />
          <>Grade : <b>{details.Grade}</b></>
        </div>
      </div>
      <div className='flex justify-between mt-3 flex-wrap object-center'>
        {details.Courses.map(({item, index}:{item:string, index:any}) => {
          return (
            <div key = {index} className='p-3 m-3 bg-pall-dl rounded-md'>
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default EducationCard
