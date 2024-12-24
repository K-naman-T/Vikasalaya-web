import { motion } from 'framer-motion'
import { Building2, CreditCard, Globe2 } from 'lucide-react'

const OfflinePayment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary rounded-2xl shadow-xl p-8 mt-8"
    >
      <h2 className="text-2xl font-bold text-text mb-6">Contribute Offline</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Indian Nationals */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-text">For Indian Nationals</h3>
          </div>
          <div className="space-y-2 text-sm text-text-muted">
            <p><span className="font-medium text-text">Bank - </span>Yes Bank</p>
            <p><span className="font-medium text-text">A/c Name - </span>VIKASALAYA FOUNDATION</p>
            <p><span className="font-medium text-text">Account no  - </span>038588700000246</p>
            <p><span className="font-medium text-text">IFSC CODE - </span> YESB0000385</p>
            <p><span className="font-medium text-text">Branch - </span>Dhanbad</p>
          </div>
        </div>

        {/* Cheque/Draft */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-text">By Cheque/Draft</h3>
          </div>
          <div className="space-y-2 text-sm text-text-muted">
            <p>Please make your cheque/draft in the name of</p>
            <p className="font-medium text-text">VIKASALAYA FOUNDATION</p>
            <p>and send it to:</p>
            <p>VIKASALAYA FOUNDATION</p>
            <p>Dhanbad</p>
            <p>Jharkhand - 826001</p>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-xl text-sm text-text-muted">
        <p>Note: After making an offline contribution, please email the transaction details to <a href="mailto:vikasalaya@gmail.com" className="text-primary hover:underline">vikasalaya@gmail.com</a> for tracking and tax receipt purposes.</p>
      </div>
    </motion.div>
  )
}

export default OfflinePayment 