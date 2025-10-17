import React, { useState } from 'react'

const ContactPop = ({ onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!name || !email || !phone) {
      alert("❌ Please fill in all fields")
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      })

      if (response.ok) {
        console.log("✅ Submitted successfully!")
        setName('')
        setEmail('')
        setPhone('')
        onClose()
      } else {
        console.log("❌ Submission failed. Try again.")
      }
    } catch (error) {
      alert("❌ Error: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-black border border-white/20 p-8 rounded-xl shadow-xl w-[90%] max-w-md space-y-6 text-white">

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            placeholder="Write your name..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-white transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            placeholder="Write your email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-white transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input 
            type="tel" 
            placeholder="Write your number..." 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-white transition"
          />
        </div>

        <div className="space-y-3">
          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-white text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button 
            onClick={onClose}
            className="w-full bg-transparent text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border border-white transition font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPop