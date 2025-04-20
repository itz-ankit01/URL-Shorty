import Link from "next/link";

async function fetchUrls() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`, {
        method: 'GET',
        cache: 'no-store',
    })

    if(!response.ok) {
        throw new Error('Failed to fetch urls')
    }

    return response.json()
}

export default async function UrlLists() {
    let urls;
    try {
        urls = await fetchUrls()
    } catch (error) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="p-8 bg-white rounded-2xl shadow-xl max-w-md w-full border border-red-100 animate-fade-in">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">Oops! Something went wrong</h1>
                        <p className="text-gray-600 mb-6 text-lg">{error.message}</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                        Your Shortened URLs
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        All your links in one <span className="font-semibold text-blue-600">dashboard</span> 
                    </p>
                    
                    <div className="mt-8 flex justify-center gap-4">
                        <Link 
                            href="/"
                            className="px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 rounded-full shadow-md border border-gray-200 flex items-center transition-all duration-300 hover:shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">Go To Home</span>
                        </Link>
                        <div className="px-6 py-2 bg-white rounded-full shadow-md border border-gray-200 flex items-center">
                            <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-gray-700">
                                {urls.urls.length} Active Links
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 backdrop-blur-sm bg-opacity-80">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gradient-to-r from-purple-50 to-blue-50">
                                <tr>
                                    <th scope="col" className="px-8 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Original URL
                                    </th>
                                    <th scope="col" className="px-8 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Shortened URL
                                    </th>
                                    <th scope="col" className="px-8 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Clicks
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {urls.urls.map((url) => (
                                    <tr 
                                        key={url?._id} 
                                        className="hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
                                    >
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center shadow-inner">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-base font-medium text-gray-900 truncate max-w-md">
                                                        {url.originalUrl}
                                                    </div>
                                                    <div className="text-sm text-gray-500 mt-1">
                                                        {new URL(url.originalUrl).hostname}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <a 
                                                href={`/${url.shortUrl}`} 
                                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-600 rounded-xl text-base font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-800 shadow-inner">
                                                    {url.clicks || 0} clicks
                                                </span>
                                                {url.clicks > 0 && (
                                                    <span className="ml-2 text-xs text-green-600 animate-bounce">
                                                        ↑
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
                        <p className="text-gray-700 font-medium">
                            <span className="text-purple-600">{urls.urls.length}</span> links generated •{' '}
                            <span className="text-blue-600">
                                {urls.urls.reduce((acc, url) => acc + (url.clicks || 0), 0)}
                            </span>{' '}
                            total clicks
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}