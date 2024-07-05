import { useState } from "react"

function App() {
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [sex, setSex] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [placeOfBirth, setplaceOfBirth] = useState('')


  const clearData = () => {
      setLastName('');
      setName('');
      setDateOfBirth('');
      setSex('');
      setEmail('');
      setPhone('');
      setplaceOfBirth('');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${lastName}, ${name} ${dateOfBirth}, ${sex}, ${email}, ${phone}, ${placeOfBirth}`)
    clearData()
  }

  return (
    <>
      <main className='h-screen grid place-items-center font-battambang'>
            <form onSubmit={handleSubmit}  className='shadow-lg border-2 border-gray-100 p-5 rounded-lg max-w-[90%] lg:max-w-3xl w-full'>
                 <h1 className='text-center my-4 font-semibold text-3xl text-blue-600'>ទម្រង់ចុះឈ្មោះ</h1>
                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <fieldset>
                          <label className='block mb-1'>នាមត្រកូល(last name)*</label>
                          <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" required className='w-full outline-none focus:outline-none border-2 border-gray-200 px-2 focus:border-blue-500/80  transition-all duration-300 py-1.5 rounded-lg ' placeholder='បញ្ចូលនាមត្រកូល' />
                    </fieldset>
                    <fieldset>
                          <label className='block mb-1'>នាម(name)*</label>
                          <input onChange={(e) => setName(e.target.value)} value={name} type="text" required className='w-full outline-none focus:outline-none border-2 border-gray-200 px-2 focus:border-blue-500/80  transition-all duration-300 py-1.5 rounded-lg ' placeholder='បញ្ចូលនាម' />
                    </fieldset>
                    <fieldset>
                          <label className='block mb-1'>ថ្ងៃខែឆ្នាំកំណើត(date of birth) *</label>
                          <input onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} type="date" required className='w-full outline-none focus:outline-none border-2 border-gray-200 px-2 focus:border-blue-500/80  transition-all duration-300 py-1.5 rounded-lg ' />
                    </fieldset>
                    <fieldset>
                          <label className='block mb-1'>ភេទ(sex) *</label>
                          <select onChange={(e) => setSex(e.target.value)} value={sex} required className='w-full outline-none focus:outline-none border-2 border-gray-200 px-2 focus:border-blue-500/80  transition-all duration-300 py-1.5 rounded-lg '>
                              <option value="" selected={true} disabled={true}>ជ្រើសរើសភេទ</option>
                              <option value="ស្រី">ស្រី</option>
                              <option value="ប្រុស">ប្រុស</option>
                          </select>
                    </fieldset>
                    <fieldset>
                          <label className='block mb-1'>អ៊ីមែល(email)</label>
                          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full outline-none focus:outline-none border-2 border-gray-200 px-2 focus:border-blue-500/80  transition-all duration-300 py-1.5 rounded-lg ' placeholder='បញ្ចូលអ៊ីមែល' />
                    </fieldset>
                    <fieldset>
                          <label className='block mb-1'>លេខទូរស័ព្ទ(phone)</label>
                          <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className='w-full outline-none focus:outline-none border-2 border-gray-200 px-2 focus:border-blue-500/80  transition-all duration-300 py-1.5 rounded-lg ' placeholder='បញ្ចូលលេខទូរសព្ទ' />
                    </fieldset>
                   

                    <fieldset className='col-span-1 lg:col-span-2'>
                          <label>ទីកន្លែងកំណើត(place of birth)</label>
                          <textarea onChange={(e) => setplaceOfBirth(e.target.value)} rows={4} value={placeOfBirth} placeholder='បញ្ចូលទីកន្លែងកំណើត' className='w-full outline-none focus:outline-none border-2 border-gray-200 px-2 focus:border-blue-500/80  transition-all duration-300 py-1.5 rounded-lg '></textarea>
                    </fieldset>
                    
                    <fieldset className='flex gap-3'>
                          <button type='button' className='w-20 py-1.5 rounded-lg border border-gray-200'>បោះបង់</button>
                          <button type='submit' className='w-20 py-1.5 rounded-lg bg-blue-600 text-white'>រក្សាទុក</button>
                    </fieldset>
                 </div>
            </form>
      </main>
    </>
  )
}

export default App
