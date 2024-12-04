export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Events</h1>
      <p className="text-gray-600 text-center mb-12">
        Register for our upcoming events
      </p>
      
      <div className="aspect-[3/2] w-full max-w-4xl mx-auto">
        <iframe
          src="https://cal.com/vikasalaya"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  )
}
