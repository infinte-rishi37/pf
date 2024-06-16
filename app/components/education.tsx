import EducationCard from "./Cards/EducationCard"

const EducationDetail = [
    {
        Institute : "Army Institute of Technology",
        Location : "Pune, Maharastra, India",
        Degree : "Bachelor of Engineering ( Information Technology )",
        startsFrom : "Oct 2022",
        endsOn : "July 2026",
        Grade : "9.27 CGPA",
        Courses :[
            "Data Structures and Algorithms",
            "Object-Oriented Programming",
            "Database Management Systems",
            "Basics of Computer Networks"
        ]
    }
]

const Education = ({theme}:{theme:string}) => {
  return (
    <main className={'w-full h-auto p-16 flex-col  ' + 
    (theme == 'dark' ? 'bg-pall-dd' : 'bg-pall-dl')}>
        <h1 className="text-h1 py-4">
            Education
        </h1>
        <div>
            {EducationDetail.map((items, index) => {
                return(
                    <EducationCard details = {items} key = {index} />
                )
            })}
        </div>
    </main>
  )
}

export default Education
