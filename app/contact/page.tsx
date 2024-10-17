import { Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 mt-10">
      <span className="flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-600 text-center underline">
          get in touch
        </h1>
      </span>

      <div className="mt-10 space-y-6">
        <p className="text-center text-gray-600">
          I'd love to hear from you. Feel free to reach out using the email link below.
        </p>

        <div className="flex justify-center">
          <a
            href="mailto:cihan.isildar@outlook.com"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-[4px] hover:bg-blue-700 transition duration-300 shadow-lg "
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me an email
          </a>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Or copy my email address: <span className="font-medium">cihan.isildar@outlook.com</span>
        </p>
      </div>
    </div>
  )
}