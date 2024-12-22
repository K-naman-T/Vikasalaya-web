export const formatWhatsAppLink = (phone: string, message: string = '') => {
  const cleanPhone = phone.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ''}`
} 