import { motion } from 'motion/react';
import './App.css';

function App() {
  return (
    <>
      <div>
        <motion.div
          animate={{ x: 1000, rotate: 360 }}
          transition={{ duration: 3, delay: 2, repeat: 2 }}
          className="box"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          box 1
        </motion.div>
      </div>
      <motion.h1
        animate={{ x: 1000, y: 500 }}
        transition={{ duration: 2, delay: 1, repeat: 2 }}
      >
        subscribe
      </motion.h1>
    </>
  );
}

export default App;
