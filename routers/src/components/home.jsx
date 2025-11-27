import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* HERO SECTION */}
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-7xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <motion.h2
              className="text-4xl font-bold sm:text-5xl leading-tight"
              animate={{ x: -200, y: 20 }}
              transition={{ duration: 2, delay: 0.5, ease: 'anticipate' }}
            >
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </motion.h2>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              A simple tagline that hints at something bigger — a promise, a
              product, a story waiting to unfold.
            </p>

            <motion.button
              whileHover={{ scale: 1.2, backgroundColor: 'green' }}
              transition={{ ease: 'backInOut' }}
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-80 transition-all gap-2"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download now
            </motion.button>
          </div>
        </div>

        <motion.div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <motion.img
            whileHover={{ scale: 1.2 }}
            className="w-96"
            src="https://i.pinimg.com/1200x/d3/a5/e9/d3a5e9251ff5ea8190ddd31283aa1f63.jpg"
            alt="hero-img"
          />
        </motion.div>
      </aside>

      {/* SECTION TITLE */}
      <motion.h1
        whileHover={{ scale: 1.2, color: 'red' }}
        animate={{ x: [-800, 100, 50, 100] }}
        transition={{ duration: 2, repeat: 2, ease: 'anticipate' }}
        className="text-center text-2xl sm:text-5xl py-14 font-medium"
      >
        Lorem Ipsum Yojo
      </motion.h1>

      {/* FEATURES SECTION */}
      <div className="grid sm:grid-cols-3 gap-10 mx-4 sm:mx-20 mt-10">
        {[
          {
            title: 'Fast & Reliable',
            desc: 'A quick stride forward, skipping the clutter, cruising smoothly.',
          },
          {
            title: 'Secure by Design',
            desc: 'Old-school principles with new-age armor stitched together.',
          },
          {
            title: 'Beautifully Simple',
            desc: 'Because elegance is never loud — it simply stands out.',
          },
        ].map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border hover:shadow-xl transition-shadow bg-white"
          >
            <motion.h3
              whileHover={{ color: 'red', scale: 1.1 }}
              className="text-gray-600 text-xl font-semibold mb-2"
            >
              {card.title}
            </motion.h3>
            <motion.p
              whileHover={{ color: 'green', scale: 1.1 }}
              className="text-gray-600"
            >
              {card.desc}
            </motion.p>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="text-center py-16">
        <motion.h2
          whileHover={{ scaleY: 1.4, scale: 1.2, color: 'red' }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Ready to Start?
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          Every journey begins with a click — and this one might just surprise
          you.
        </p>

        <motion.button
          whileHover={{ scale: 1.2, backgroundColor: 'green' }}
          transition={{ ease: 'backInOut' }}
          to="/"
          className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}
