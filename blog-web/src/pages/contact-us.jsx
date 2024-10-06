import { Footer, Header } from "@/components";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="w-[895px] h-[895px] px-32 justify-center items-center ml-[300px] mt-20 ">
        <h1 className="font-semibold text-2xl">Contact Us</h1>
        <p className="text-gray-500 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div>
          <div className="flex my-4">
            <button className="w-[294px] h-[133px] border-2 border-gray-200 rounded-md mx-2 ">
              <h1 className="font-semibold text-xl text-left pt-2 pl-4">
                Address
              </h1>
              <p className="text-left pt-3 text-gray-500 font-thin ml-4">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </button>
            <button className="w-[294px] h-[133px] border-2 border-gray-200 rounded-md mx-4">
              <h1 className="font-semibold text-xl text-left pl-4">Contact</h1>
              <div className="text-left pt-3 text-gray-500 font-thin">
                <p className="ml-4">313-332-8662</p>
                <p className="ml-4">info@email.com</p>
              </div>
            </button>
          </div>

          <div className="w-[636px] h-[440px] bg-[#F6F6F7]">
            <h2 className="font-semibold text-lg pt-8 pl-8">Leave a Message</h2>
            <div className="pl-8 mt-4 space-x-7">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[225px] h-[38px] border-2 border-gray-100 rounded-sm pl-4"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-[225px] h-[38px] border-2 border-gray-100 rounded-sm pl-4"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-[478px] h-[35px] border-2 border-gray-100 rounded-sm pl-4 ml-8 mt-4"
            />
            <input
              type="text"
              placeholder="Write a message"
              className="w-[478px] h-[134px] border-2 border-gray-100 rounded-sm pl-4 ml-8 mt-4 "
            />
            <div>
              <button className="rounded-sm ml-8 mt-8 bg-[#4B6BFB] text-white py-1 px-2.5 w-[130px] h-[40px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
