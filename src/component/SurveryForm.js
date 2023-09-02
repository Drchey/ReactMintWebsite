import React, { useState } from 'react'

const SurveryForm = ({ name, form_id, group }) => {
  const [formData, setFormData] = useState({
    name: '',
    company_type: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="mt-6">
      <h5 className="text-grey-900 font-semibold text-green-700">{name} </h5>

      <div className="mt-2 space-x-2 flex flex-1 w-full">
        <div className="flex item-center">
          <input
            type="radio"
            id="radioButton"
            name={group}
            class="form-radio h-5 w-5 text-indigo-600"
            value="1"
            onChange={handleInputChange}
            required
          />
          <label for="radioButton" className="ml-2 text-gray-700">
            Very Dissatisfied
          </label>
        </div>

        <div className="flex item-center">
          <input
            type="radio"
            id={form_id}
            name={group}
            class="form-radio h-5 w-5 text-indigo-600"
            value="2"
          />
          <label for="radioButton" className="ml-2 text-gray-700">
            Dissatisfied
          </label>
        </div>

        <div className="flex item-center">
          <input
            type="radio"
            id={form_id}
            name={group}
            class="form-radio h-5 w-5 text-indigo-600"
            value="3"
          />
          <label for="radioButton" className="ml-2 text-gray-700">
            Neutral
          </label>
        </div>

        <div className="flex item-center">
          <input
            type="radio"
            id={form_id}
            name={group}
            class="form-radio h-5 w-5 text-indigo-600"
            value="4"
          />
          <label for="radioButton" className="ml-2 text-gray-700">
            Satisfied
          </label>
        </div>

        <div className="flex item-center">
          <input
            type="radio"
            id={form_id}
            name={group}
            class="form-radio h-5 w-5 text-indigo-600"
            value="5"
          />
          <label for="radioButton" className="ml-2 text-gray-700">
            Very Satisfied
          </label>
        </div>
      </div>
    </div>
  )
}

export default SurveryForm
