import { FormComponent } from '../../components/form/index'
import landing from '../../assets/images/landing.svg'

export const Landing: React.FC = () => {
  return (
    <div className="h-full w-full md:w-screen md:h-screen bg-gray-300 m-0">
      <div
        className="
          sm:container
          h-full 
          max-h-full
          w-full 
          max-w-full
          mx-auto  
          grid
          grid-row-2
          gap-4
          grid-flow-row
          md:grid-cols-2
          bg-gray-300
        "
      >
        <div className="w-full h-full flex items-center p-9">
          <img src={landing} alt="landing logo" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <FormComponent />
        </div>
      </div>
    </div>
  )
}
