import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-[90%] max-w-md bg-white rounded-2xl p-6 md:p-8 shadow-2xl z-[101]"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center mt-2">
              <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-green-100 
                flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You for Your Donation!
              </h3>
              <p className="text-gray-600 mb-6">
                Your contribution will help us make a difference in the lives of many.
                We'll send you a confirmation email shortly.
              </p>
              
              <button
                onClick={onClose}
                className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent 
                  text-white rounded-lg font-medium shadow-lg
                  hover:shadow-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 