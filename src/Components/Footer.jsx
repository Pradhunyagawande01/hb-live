import { MessageSquare, Twitter, Linkedin, Instagram, FileText, ChevronRight, Mail, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: "https://discord.gg/vPNPDAPgG5",
      icon: <MessageSquare size={20} />,
      label: "Discord",
      color: "hover:bg-[#198F51]",
    },
    {
      href: "https://x.com/hack4brahma?t=jhqT75ofTIqomxNi-RwD5w&s=09",
      icon: <Twitter size={20} />,
      label: "Twitter",
      color: "hover:bg-[#198F51]",
    },
    {
      href: "https://www.linkedin.com/company/hack4brahma/",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      color: "hover:bg-[#198F51]",
    },
    {
      href: "https://www.instagram.com/hack4brahma?igsh=MWd3bnR0MTRmNGZrYw==",
      icon: <Instagram size={20} />,
      label: "Instagram",
      color: "hover:bg-[#198F51]",
    },
  ]

  const documentLinks = [
    // {
    //   href: "https://drive.google.com/drive/folders/1SdToxbTVp6fibqF-IsLYCUdPZQI_KhLf",
    //   icon: <FileText size={18} />,
    //   label: "Event Brochure",
    // },
    {
      href: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
      icon: <FileText size={18} />,
      label: "MLH Code of Conduct",
    },
  ]

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "hack4brahma@gmail.com",
      href: "mailto:hack4brahma@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: "+91 7820931587",
      href: "tel:+917820931587",
    },
  ]

  return (
    <footer className="relative  text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2306AD63&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Green accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#06AD63] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Branding Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-6xl uppercase font-bold tracking-tight">
                Hack
                <span className="text-[#06AD63] text-5xl md:text-7xl font-black">4</span>
                Brahma
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#06AD63] to-transparent rounded-full"></div>
            </div>

            {/* <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              A hackathon dedicated to honoring and supporting our brave soldiers through innovative technological
              solutions.
            </p> */}

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-[#06AD63]/10 to-transparent p-6 rounded-2xl border border-[#06AD63]/20">
              <p className="text-[#06AD63] font-semibold text-sm uppercase tracking-wider mb-2">Our Mission</p>
              <p className="text-gray-200 text-sm">Empowering innovation to serve those who serve our nation.</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#06AD63] flex items-center gap-2">
              Connect With Us
              <div className="flex-1 h-px bg-gradient-to-r from-[#06AD63] to-transparent"></div>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`group relative p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#06AD63] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#06AD63]/20 ${link.color}`}
                >
                  <div className="flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Documents Section */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#06AD63] flex items-center gap-2">
                Get in Touch
                <div className="flex-1 h-px bg-gradient-to-r from-[#06AD63] to-transparent"></div>
              </h3>

              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-[#06AD63]/50 hover:bg-[#06AD63]/5 transition-all duration-300 group"
                  >
                    <div className="text-[#06AD63] group-hover:scale-110 transition-transform">{contact.icon}</div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                      {contact.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#06AD63] flex items-center gap-2">
                <FileText size={20} />
                Documents
              </h4>

              <div className="space-y-2">
                {documentLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#06AD63]/10 to-transparent border border-[#06AD63]/20 hover:border-[#06AD63]/50 hover:from-[#06AD63]/20 transition-all duration-300 group"
                  >
                    <div className="text-[#06AD63] group-hover:scale-110 transition-transform">{link.icon}</div>
                    <span className="text-gray-200 group-hover:text-white transition-colors text-sm flex-1">
                      {link.label}
                    </span>
                    <ChevronRight
                      className="text-[#06AD63] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      size={16}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-[#06AD63] rounded-full animate-pulse"></div>
              <span>&copy; {currentYear} Hack4Brahma. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="hover:text-[#06AD63] cursor-pointer transition-colors">Privacy Policy</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="hover:text-[#06AD63] cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#06AD63]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#06AD63]/10 to-transparent rounded-full blur-2xl"></div>
    </footer>
  )
}

export default Footer

