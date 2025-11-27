import { motion } from 'motion/react';
import './App.css';

function App() {
  return (
    <>
      <div>
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 800, top: 0, bottom: 800 }}
          whileHover={{ scale: 1.3, backgroundColor: 'red' }}
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
    </>
  );
}

export default App;
