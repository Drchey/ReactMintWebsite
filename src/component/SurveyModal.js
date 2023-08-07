import { close } from '../assets'
import SurveryForm from './SurveryForm'

const SurveyModal = ({ isOpen, toggleModal }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 h-[40vh] ">
          <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>
          <div className="modal-container fixed inset-0 flex items-center justify-center">
            <div className="modal-content bg-white w-3/4 rounded shadow-lg p-4 overflow-y-scroll h-[640px]">
              <div className="flex align-center justify-between my-4">
                <h3 className="text-lg font-semibold mb-2 text-orange-500 ">
                  Share Your Experiences With Us{' '}
                </h3>

                <img
                  src={close}
                  alt=""
                  onClick={toggleModal}
                  className="cursor-pointer"
                />
              </div>

              <hr />
              <div className="mt-5 w-full">
                <form action="">
                  <div className="mb-2">
                    <input
                      className="border border-gray-400 rounded py-2 px-4 w-full mb-3"
                      type="text"
                      placeholder="Enter your Company name"
                    />
                  </div>
                  <SurveryForm
                    name="Customer Service"
                    form_id="customer_service"
                    group="customer_service"
                  />

                  <SurveryForm
                    name="Delivery Time"
                    form_id="delivery_time"
                    group="delivery_time"
                  />

                  <SurveryForm
                    name="Product Quality"
                    form_id="product_quality"
                    group="product_quality"
                  />

                  <SurveryForm
                    name="OverAll Service Quality"
                    form_id="service_quality"
                    group="service_quality"
                  />

                  <SurveryForm
                    name="Reliability"
                    form_id="reliability"
                    group="reliability"
                  />

                  <hr className="mt-3" />

                  <div className="mt-2">
                    <h3 className="text-forest font-semibold">
                      What is Your Perception of Our Products
                    </h3>

                    <div className="mt-5">
                      <div className="mt-2 space-x-2 flex w-full">
                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="radioButton"
                            name="assumed_product_type"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="Budget Printing Company"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            Budget Printing Company
                          </label>
                        </div>

                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="assumed_product_type"
                            name="assumed_product_type"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="Economy Printing Company"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            Economy Printing Company
                          </label>
                        </div>

                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="assumed_product_type"
                            name="assumed_product_type"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="MidScale Printing Company"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            MidScale Printing Company
                          </label>
                        </div>

                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="assumed_product_type"
                            name="assumed_product_type"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="Upscale Printing Company"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            UpScale Printing Company
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <SurveryForm
                    name="Satisfied With Our Products ? "
                    form_id="product_satisfy"
                    group="product_satisfy"
                  />

                  <SurveryForm
                    name="Satisfaction Level with our Representatives"
                    form_id="staff_satisfaction"
                    group="staff_satisfaction"
                  />

                  <SurveryForm
                    name="Rate our response to your Inquires"
                    form_id="response_inquiries"
                    group="response_inquiries"
                  />

                  <div className="mt-2">
                    <h3 className="text-forest font-semibold">
                      What Matters Most to You
                    </h3>

                    <div className="mt-5">
                      <div className="mt-2 space-x-2 flex w-full">
                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="radioButton"
                            name="product_importance"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="Security Print"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            Security Print
                          </label>
                        </div>

                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="radioButton"
                            name="product_importance"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="Timely Delivery"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            Timely Delivery
                          </label>
                        </div>

                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="radioBtn"
                            name="product_importance"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="Paper Quality"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            Paper Quality
                          </label>
                        </div>

                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="product_importance"
                            name="product_importance"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="The NSPM Brand"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            The NSPM Brand
                          </label>
                        </div>

                        <div className="flex item-center">
                          <input
                            type="radio"
                            id="product_importance"
                            name="product_importance"
                            class="form-radio h-5 w-5 text-indigo-600"
                            value="Price"
                          />
                          <label
                            for="radioButton"
                            className="ml-2 text-gray-700"
                          >
                            Price
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex align-right justify-end">
                <button className="bg-dimForest mr-4 hover:bg-dimForest text-white font-bold py-2 px-4 rounded mt-4">
                  Share Your Review With Us
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SurveyModal
