const ContactMe = () => {
  return (
    <section className="flex items-start justify-around min-[290px]:flex-wrap md:flex-nowrap py-8 gap-10 contact">
      <div className="left">
        <h2 className="text-center min-[290px]:text-7xl md:text-[12rem]">
          Contact
        </h2>
      </div>
      <div className="min-[290px]:w-full md:w-1/2 min-[290px]:px-6 md:px-0 right">
        <form>
          {/* fullname */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold">Full Name*</label>
            <input
              type="text"
              id="text"
              className="bg-transparent focus:outline-none border-b-2 border-indigo-700 border-solid text-slate-900 text-sm block w-full p-2.5"
              autoFocus
              required
            />
          </div>
          {/* email */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold">Your Email*</label>
            <input
              type="email"
              id="email"
              className="bg-transparent focus:outline-none border-b-2 border-indigo-700 border-solid text-slate-900 text-sm block w-full p-2.5"
              required
            />
          </div>
          {/* message */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold">
              Your Message*
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="bg-transparent focus:outline-none border-b-2 border-indigo-700 border-solid text-slate-900 text-sm block w-full p-2.5"
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
      </div>
    </section>
  );
};

export default ContactMe;
