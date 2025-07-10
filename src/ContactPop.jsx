import React from 'react'

const ContactPop = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
  <div className="bg-black border border-white/20 p-8 rounded-xl shadow-xl w-[90%] max-w-md space-y-6 text-white">

    {/* Name Field */}
    <div>
      <label htmlFor="Name" className="block text-sm font-medium mb-1">Name</label>
      <input 
        type="text" 
        placeholder="Write your name..." 
        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-white transition"
      />
    </div>

    {/* Email Field */}
    <div>
      <label htmlFor="Email" className="block text-sm font-medium mb-1">Email</label>
      <input 
        type="email" 
        placeholder="Write your email..." 
        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-white transition"
      />
    </div>

    {/* Phone Number Field */}
    <div>
      <label htmlFor="Phone" className="block text-sm font-medium mb-1">Phone Number</label>
      <input 
        type="tel" 
        placeholder="Write your number..." 
        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-white transition"
      />
    </div>

    <div>
    <button 
      onClick={onClose}
      className="w-full mt-4 bg-white text-black px-6 py-2 rounded-full hover:bg-black hover:text-white border border-white transition"
    >
      Close
    </button>
    <button 
      type='submit'
      onClick=""
      className="w-full mt-3 duration-300 bg-white text-black px-6 py-2 rounded-full hover:bg-black hover:text-white border border-white transition"
    >
      Submit
    </button>
    </div>
  </div>
</div>

  )
}
export default ContactPop
