import React from 'react'
import Carousel from '../components/Carousel'
import Amplify, {API, Auth} from 'aws-amplify'
import awsconfig from '../src/aws-exports'
Amplify.configure(awsconfig)
Auth.configure(awsconfig);

const contactusAPI = "apicontactus"
const path = "/contactus"

const handleSubmit = async (event) => {
  event.preventDefault()
  const data = {
    body: {
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value
        }
  }
  console.log(data)
   API.post(contactusAPI, path, data)
     .then(response => {
       console.log(response)
     })
     .catch(error =>{
       console.log(error)
     })
}

const contacts = () => {
  return (
    <div>
      <Carousel />
<div className="container my-48 px-6 mx-auto">


  <section className="mb-32 text-gray-800">
    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 className="text-3xl font-bold mb-6">Contact us</h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium, modi accusantium ipsum corporis quia asperiores
          dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
          autem omnis fugiat perspiciatis? Ad, veritatis.
        </p>
        <p className="text-gray-500 mb-2">New York, 94126, United States</p>
        <p className="text-gray-500 mb-2">+ 01 234 567 89</p>
        <p className="text-gray-500 mb-2">info@gmail.com</p>
      </div>
      <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form onSubmit={handleSubmit} >
          <div className="form-group mb-6">
            <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
              placeholder="Name"/>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
              placeholder="Email address"/>
          </div>
          <div className="form-group mb-6">
            <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="message" rows="3" placeholder="Message"></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
          <input type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87" defaultChecked/>
            <label className="form-check-label inline-block text-gray-800">Send me a copy of this
              message</label>
          </div>
          <button type="submit" 
          className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
        </form>
      </div>
    </div>
  </section>


</div>

    </div>
  )
}

export default contacts