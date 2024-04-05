const ContactMe = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-10 contact">
      <h2 className="text-center xs:text-9xl md:text-[12rem]">Contact</h2>

      <form className="max-w-sm mx-auto">
        {/* fullname */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-bold">Full Name*</label>
          <input
            type="text"
            id="text"
            className="bg-slate-900 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="John Doe"
            required
          />
        </div>
        {/* email */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-bold">Your Email*</label>
          <input
            type="email"
            id="email"
            className="bg-slate-900 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        {/* message */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-bold">Your Message*</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="bg-slate-900 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="Write your message here"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
