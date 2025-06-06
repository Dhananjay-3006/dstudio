import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                    Resources
                </h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, index) =>(
                        <li key={index}>
                              <a key={index} href={link.href} className="flex items-center gap-1 text-white-700 hover:text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>                                
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                    Platform
                </h3>
                <ul className="space-y-2">
                    {platformLinks.map((link, index) =>(
                        <li key={index}>
                              <a key={index} href={link.href} className="flex items-center gap-1 text-white-700 hover:text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>                                
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
            </div>     
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                    Community
                </h3>
                <ul className="space-y-2">
                    {communityLinks.map((link, index) =>(
                        <li>
                            {/* <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a> */}
                              <a key={index} href={link.href} className="flex items-center gap-1 text-white-700 hover:text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>                                
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
            </div>                   

        </div>
    </footer>
  )
}

export default Footer